"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = exports.logger = exports.LEVEL = void 0;
const fast_safe_stringify_1 = __importDefault(require("fast-safe-stringify"));
var LEVEL;
(function (LEVEL) {
    LEVEL["INFO"] = "INFO";
    LEVEL["DEBUG"] = "DEBUG";
    LEVEL["WARN"] = "WARN";
    LEVEL["ERROR"] = "ERROR";
    LEVEL["EXCEPTION"] = "EXCEPTION";
    LEVEL["FATAL"] = "FATAL";
    LEVEL["UNKNOWN"] = "UNKNOWN";
})(LEVEL = exports.LEVEL || (exports.LEVEL = {}));
class GrayLogLogger {
    constructor(server, port, environment, options) {
        this.environment = environment;
        this.log = require('gelf-pro');
        this.log.setConfig({
            fields: {
                facility: (options === null || options === void 0 ? void 0 : options.facility) || 'DMSC',
                service: (options === null || options === void 0 ? void 0 : options.service) || 'UserOfficeBackend',
            },
            adapterName: 'udp',
            adapterOptions: {
                host: server,
                port: port,
            },
        });
    }
    createPayload(level, message, context) {
        return {
            levelStr: LEVEL[level],
            title: message,
            environment: this.environment,
            stackTrace: new Error().stack,
            context: (0, fast_safe_stringify_1.default)(context),
        };
    }
    logInfo(message, context) {
        this.log.info(message, this.createPayload(LEVEL.INFO, message, context));
    }
    logWarn(message, context) {
        this.log.warning(message, this.createPayload(LEVEL.WARN, message, context));
    }
    logDebug(message, context) {
        this.log.debug(message, this.createPayload(LEVEL.DEBUG, message, context));
    }
    logError(message, context) {
        this.log.error(message, this.createPayload(LEVEL.ERROR, message, context));
    }
    logUnknown(message, context) {
        this.log.error(message, this.createPayload(LEVEL.UNKNOWN, message, context));
    }
    logException(message, exception, context) {
        if (exception instanceof Error) {
            const { name, message: msg, stack } = exception;
            this.logError(message, {
                exception: { name, message: msg, stack },
                ...context,
            });
        }
        else if (exception !== null) {
            this.logError(message, { exception, ...context });
        }
        else {
            this.logError(message, context || {});
        }
    }
}
class ConsoleLogger {
    logInfo(message, context) {
        this.log(LEVEL.INFO, message, context);
    }
    logWarn(message, context) {
        this.log(LEVEL.WARN, message, context);
    }
    logDebug(message, context) {
        this.log(LEVEL.DEBUG, message, context);
    }
    logError(message, context) {
        this.log(LEVEL.ERROR, message, context);
    }
    logUnknown(message, context) {
        this.log(LEVEL.UNKNOWN, message, context);
    }
    logException(message, exception, context) {
        if (exception instanceof Error) {
            const { name, message: msg, stack } = exception;
            this.logError(message, {
                exception: { name, message: msg, stack },
                ...context,
            });
        }
        else if (exception !== null) {
            this.logError(message, { exception, ...context });
        }
        else {
            this.logError(message, context || {});
        }
    }
    log(level, message, context) {
        console.log(`[${new Date().toISOString()}] ${level} - ${message} \n ${(0, fast_safe_stringify_1.default)(context)}`);
    }
}
exports.ConsoleLogger = ConsoleLogger;
class LoggerFactory {
    static getLogger() {
        if (this.logger) {
            return this.logger;
        }
        const server = process.env.GRAYLOG_SERVER;
        const port = process.env.GRAYLOG_PORT;
        if (server && port) {
            const env = process.env.NODE_ENV || 'unset';
            this.logger = new GrayLogLogger(server, parseInt(port), env);
        }
        else {
            this.logger = new ConsoleLogger();
        }
        return this.logger;
    }
}
const logger = LoggerFactory.getLogger();
exports.logger = logger;
//# sourceMappingURL=index.js.map