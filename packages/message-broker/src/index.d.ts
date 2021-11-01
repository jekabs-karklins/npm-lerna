import { MessageProperties, Options } from 'amqplib';
export declare enum Queue {
    PROPOSAL = "PROPOSAL",
    SCHEDULED_EVENTS = "SCHEDULED_EVENTS",
    BROADCAST = "useroffice.fanout"
}
export declare type ConsumerCallback = (type: string, message: Record<string, unknown>, properties: MessageProperties) => Promise<void>;
export interface MessageBroker {
    sendMessage(queue: Queue, type: string, message: string): Promise<void>;
    sendBroadcast(queue: Queue, type: string, message: string): Promise<void>;
    listenOn(queue: Queue, cb: ConsumerCallback): void;
    listenOnBroadcast(cb: ConsumerCallback): void;
}
export declare class RabbitMQMessageBroker implements MessageBroker {
    private connectionConfig;
    private socketOptions;
    private consumers;
    private connection;
    private channel;
    private messageBuffer;
    listenOnBroadcast(cb: ConsumerCallback): Promise<void>;
    listenOn(queue: Queue, cb: ConsumerCallback): void;
    sendBroadcast(type: string, msg: string): Promise<void>;
    sendMessage(queue: Queue, type: string, msg: string): Promise<void>;
    setup(connectionConfig?: string | Options.Connect, socketOptions?: any): Promise<void>;
    private scheduleReconnect;
    private registerChannel;
    private scheduleChannelCreation;
    private registerConsumers;
    private assertQueue;
    private flushMessages;
}
