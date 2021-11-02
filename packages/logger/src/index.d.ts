export declare enum LEVEL {
    INFO = "INFO",
    DEBUG = "DEBUG",
    WARN = "WARN",
    ERROR = "ERROR",
    EXCEPTION = "EXCEPTION",
    FATAL = "FATAL",
    UNKNOWN = "UNKNOWN"
}
declare class ConsoleLogger implements Logger {
    logInfo(message: string, context: Record<string, unknown>): void;
    logWarn(message: string, context: Record<string, unknown>): void;
    logDebug(message: string, context: Record<string, unknown>): void;
    logError(message: string, context: Record<string, unknown>): void;
    logUnknown(message: string, context: Record<string, unknown>): void;
    logException(message: string, exception: unknown, context?: Record<string, unknown>): void;
    log(level: LEVEL, message: string, context: Record<string, unknown>): void;
}
export interface Logger {
    logInfo(message: string, context: Record<string, unknown>): void;
    logWarn(message: string, context: Record<string, unknown>): void;
    logDebug(message: string, context: Record<string, unknown>): void;
    logError(message: string, context: Record<string, unknown>): void;
    logUnknown(message: string, context: Record<string, unknown>): void;
    logException(message: string, exception: unknown, context?: Record<string, unknown>): void;
}
declare const logger: Logger;
export { logger, ConsoleLogger };
