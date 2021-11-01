"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitMQMessageBroker = exports.Queue = void 0;
const duo_logger_1 = require("@esss-swap/duo-logger");
const amqplib_1 = __importDefault(require("amqplib"));
var Queue;
(function (Queue) {
    Queue["PROPOSAL"] = "PROPOSAL";
    Queue["SCHEDULED_EVENTS"] = "SCHEDULED_EVENTS";
    Queue["BROADCAST"] = "useroffice.fanout";
})(Queue = exports.Queue || (exports.Queue = {}));
class RabbitMQMessageBroker {
    constructor() {
        this.connectionConfig = 'amqp://localhost';
        this.consumers = [];
        this.connection = null;
        this.channel = null;
        this.messageBuffer = [];
    }
    async listenOnBroadcast(cb) {
        if (this.channel) {
            await this.channel.assertExchange(Queue.BROADCAST, 'fanout', {
                durable: true,
            });
            const queueName = await this.channel.assertQueue('', {
                exclusive: true,
            });
            this.channel.bindQueue(queueName.queue, Queue.BROADCAST, '');
            await this.channel.consume(queueName.queue, (msg) => {
                var _a;
                if (!msg) {
                    return;
                }
                const stringifiedContent = msg.content.toString();
                let content = {};
                try {
                    content = JSON.parse(stringifiedContent);
                }
                catch (err) {
                    duo_logger_1.logger.logException('RabbitMQMessageBroker: Failed to parse the message content', err, { content: stringifiedContent });
                    (_a = this.channel) === null || _a === void 0 ? void 0 : _a.nack(msg, false, false);
                    return;
                }
                cb(msg.properties.type, content, msg.properties)
                    .then(() => {
                    var _a;
                    (_a = this.channel) === null || _a === void 0 ? void 0 : _a.ack(msg);
                })
                    .catch((err) => {
                    var _a;
                    duo_logger_1.logger.logException(`RabbitMQMessageBroker: Registered consumer failed (${queueName.queue})`, err, { ...msg, content });
                    (_a = this.channel) === null || _a === void 0 ? void 0 : _a.nack(msg, false, false);
                });
            }, { noAck: false });
        }
    }
    listenOn(queue, cb) {
        this.consumers.push([queue, cb]);
        if (this.channel) {
            this.registerConsumers();
        }
    }
    async sendBroadcast(type, msg) {
        if (!this.channel) {
            duo_logger_1.logger.logWarn('Channel is not available', { type, msg });
            return;
        }
        try {
            await this.channel.assertExchange(Queue.BROADCAST, 'fanout', {
                durable: true,
            });
            this.channel.publish(Queue.BROADCAST, '', Buffer.from(msg), {
                persistent: true,
                timestamp: Date.now(),
                type: type,
            });
        }
        catch (err) {
            duo_logger_1.logger.logException('sending message failed at some point', err, {
                type,
                msg,
            });
        }
    }
    async sendMessage(queue, type, msg) {
        if (!this.channel) {
            duo_logger_1.logger.logWarn('Channel is not available', { queue, type, msg });
            this.messageBuffer.push({ queue, type, msg });
            return;
        }
        try {
            await this.assertQueue(queue);
            const writeable = this.channel.sendToQueue(queue, Buffer.from(msg), {
                persistent: true,
                timestamp: Date.now(),
                type: type,
            });
            // queue up messages and listen for `drain` event
            if (!writeable) {
                this.messageBuffer.push({ queue, type, msg });
            }
        }
        catch (err) {
            duo_logger_1.logger.logException('sending message failed at some point', err, {
                queue,
                type,
                msg,
            });
        }
    }
    async setup(connectionConfig, socketOptions) {
        this.connectionConfig = connectionConfig || this.connectionConfig;
        this.socketOptions = socketOptions;
        try {
            duo_logger_1.logger.logInfo('RabbitMQMessageBroker: Connecting...', {});
            this.connection = await amqplib_1.default.connect(this.connectionConfig, this.socketOptions);
            duo_logger_1.logger.logInfo('RabbitMQMessageBroker: Connected', {});
            this.connection.on('error', (err) => {
                duo_logger_1.logger.logException('RabbitMQMessageBroker: Connection error', err);
            });
            this.connection.on('close', () => {
                duo_logger_1.logger.logWarn('RabbitMQMessageBroker: Connection closed', {});
                this.connection = null;
                this.channel = null;
                this.scheduleReconnect();
            });
            await this.registerChannel();
            await this.registerConsumers();
            duo_logger_1.logger.logInfo('RabbitMQMessageBroker: Setup finished', {});
        }
        catch (e) {
            duo_logger_1.logger.logException('RabbitMQMessageBroker: Setup failed:', e);
            // if we already have a connection but failed to register channel
            // close the channel and restart the process
            if (this.connection) {
                await this.connection
                    .close()
                    .catch((e) => duo_logger_1.logger.logException('RabbitMQMessageBroker: failed to close connection in try-catch', e));
                this.connection = null;
            }
            this.scheduleReconnect();
        }
    }
    scheduleReconnect() {
        duo_logger_1.logger.logInfo('RabbitMQMessageBroker: Trying to reconnecting after 5 sec', {});
        setTimeout(() => this.setup(), 5000);
    }
    async registerChannel() {
        if (!this.connection || this.channel) {
            return;
        }
        duo_logger_1.logger.logInfo('RabbitMQMessageBroker: Creating channel...', {});
        this.channel = await this.connection.createChannel();
        duo_logger_1.logger.logInfo('RabbitMQMessageBroker: Channel created', {});
        this.channel.on('drain', () => {
            this.flushMessages();
        });
        this.channel.on('error', (err) => {
            duo_logger_1.logger.logException('RabbitMQMessageBroker: Channel error', err);
        });
        this.channel.on('close', () => {
            duo_logger_1.logger.logWarn('RabbitMQMessageBroker: Channel closed', {});
            this.channel = null;
            this.scheduleChannelCreation();
        });
        // after (re)creating a channel try to flush every buffered messages
        this.flushMessages();
    }
    scheduleChannelCreation() {
        duo_logger_1.logger.logInfo('RabbitMQMessageBroker: Trying to recreate a channel after 5 sec', {});
        setTimeout(() => this.registerChannel(), 5000);
    }
    async registerConsumers() {
        if (!this.channel) {
            return;
        }
        try {
            duo_logger_1.logger.logInfo(`RabbitMQMessageBroker: Registering consumers (${this.consumers.length})`, {});
            const consumers = this.consumers;
            this.consumers = [];
            for (const [queue, cb] of consumers) {
                await this.assertQueue(queue);
                await this.channel.consume(queue, (msg) => {
                    var _a;
                    // is this even possible???
                    if (!msg) {
                        return;
                    }
                    const stringifiedContent = msg.content.toString();
                    let content = {};
                    try {
                        content = JSON.parse(stringifiedContent);
                    }
                    catch (err) {
                        duo_logger_1.logger.logException('RabbitMQMessageBroker: Failed to parse the message content', err, { content: stringifiedContent });
                        (_a = this.channel) === null || _a === void 0 ? void 0 : _a.nack(msg, false, false);
                        return;
                    }
                    cb(msg.properties.type, content, msg.properties)
                        .then(() => {
                        var _a;
                        /**
                         * NOTE:
                         * `this.ch` can be null when something goes down while processing an event.
                         * If a channel with not acknowledged message is closed
                         * the event gets back to the queue.
                         * Even if we establish a channel while processing the event
                         * RabbitMQ won't accept the ack request
                         *
                         * See: https://www.rabbitmq.com/confirms.html
                         * Acknowledgement must be sent on the same channel that received the delivery.
                         * Attempts to acknowledge using a different channel will result in a channel-level
                         * protocol exception. See the doc guide on confirmations to learn more.
                         *
                         * TODO: maybe try to handle it gracefully and handle duplicate
                         * event processing in the listener
                         *
                         */
                        (_a = this.channel) === null || _a === void 0 ? void 0 : _a.ack(msg);
                    })
                        .catch((err) => {
                        var _a;
                        duo_logger_1.logger.logException(`RabbitMQMessageBroker: Registered consumer failed (${queue})`, err, { ...msg, content });
                        /***
                         * Same situation we have above
                         * TODO: maybe try handle gracefully
                         *
                         * NOTE: not acknowledged events go to a dead letter queue
                         */
                        (_a = this.channel) === null || _a === void 0 ? void 0 : _a.nack(msg, false, false);
                    });
                }, { noAck: false });
            }
            duo_logger_1.logger.logInfo('RabbitMQMessageBroker: Consumers registered', {});
        }
        catch (err) {
            duo_logger_1.logger.logException('RabbitMQMessageBroker: Failed to register consumer', err);
        }
    }
    async assertQueue(queue) {
        if (!this.channel) {
            return;
        }
        const deadLetterQueue = `DL__${queue}`;
        const deadLetterExchange = `DLX__${queue}`;
        await this.channel.assertExchange(deadLetterExchange, 'fanout', {
            durable: true,
        });
        await this.channel.assertQueue(deadLetterQueue, { durable: true });
        await this.channel.bindQueue(deadLetterQueue, deadLetterExchange, '');
        await this.channel.assertQueue(queue, {
            deadLetterExchange: deadLetterExchange,
            durable: true,
        });
    }
    flushMessages() {
        if (this.messageBuffer.length === 0) {
            return;
        }
        duo_logger_1.logger.logInfo(`RabbitMQMessageBroker: flushMessage triggered, buffered messages: ${this.messageBuffer.length}`, {});
        const messageBuffer = this.messageBuffer;
        this.messageBuffer = [];
        messageBuffer.forEach(({ queue, type, msg }) => {
            this.sendMessage(queue, type, msg);
        });
    }
}
exports.RabbitMQMessageBroker = RabbitMQMessageBroker;
//# sourceMappingURL=index.js.map