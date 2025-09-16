export interface LogWriter {
    debug(msg: string): void;
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
    level?: LogLevel;
    setLevel?(level: LogLevel): void;
}
export interface LogFormatter {
    Debug(tag: string, msg: string): string;
    Info(tag: string, msg: string): string;
    Warn(tag: string, msg: string): string;
    Error(tag: string, msg: string): string;
}
export interface Logger {
    w: LogWriter;
    f: LogFormatter;
}
export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    NONE = 4
}
export declare class TimeFormatter implements LogFormatter {
    Debug(tag: any, msg: any): string;
    Error(tag: any, msg: any): string;
    Info(tag: any, msg: any): string;
    Warn(tag: any, msg: any): string;
}
export declare const ConsoleLogger: Logger;
export declare const NoLog: Logger;
/**
 * 已实现两个功能：
 * 1. 保持原有调用方式：ConsoleLogger.w.debug(ConsoleLogger.f.Debug(tag, msg))
 * 2. 级别控制：ConsoleLogger.w.setLevel(LogLevel.INFO) - 超过设定级别才打印
 *
 * 使用示例：
 * ConsoleLogger.w.setLevel(LogLevel.INFO)  // 设置级别
 *
 * // 原有调用方式，现在支持级别控制：
 * ConsoleLogger.w.debug(ConsoleLogger.f.Debug("Tag", "message"))  // 不会输出（级别低于INFO）
 * ConsoleLogger.w.info(ConsoleLogger.f.Info("Tag", "message"))    // 会输出
 */
//# sourceMappingURL=logger.d.ts.map