"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoLog = exports.ConsoleLogger = exports.TimeFormatter = exports.LogLevel = void 0;
// 日志级别枚举
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["NONE"] = 4] = "NONE";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class TimeFormatter {
    Debug(tag, msg) {
        return `${new Date().toISOString()} Debug: ${tag}  --->  ${msg}`;
    }
    Error(tag, msg) {
        return `${new Date().toISOString()} Error: ${tag}  --->  ${msg}`;
    }
    Info(tag, msg) {
        return `${new Date().toISOString()} Info: ${tag}  --->  ${msg}`;
    }
    Warn(tag, msg) {
        return `${new Date().toISOString()} Warn: ${tag}  --->  ${msg}`;
    }
}
exports.TimeFormatter = TimeFormatter;
const wrapConsole = (defaultLevel = LogLevel.WARN) => {
    const wrapper = {
        level: defaultLevel,
        debug(msg) {
            if (LogLevel.DEBUG >= wrapper.level) {
                console.debug(msg);
            }
        },
        info(msg) {
            if (LogLevel.INFO >= wrapper.level) {
                console.info(msg);
            }
        },
        warn(msg) {
            if (LogLevel.WARN >= wrapper.level) {
                console.warn(msg);
            }
        },
        error(msg) {
            if (LogLevel.ERROR >= wrapper.level) {
                console.error(msg);
            }
        },
        setLevel(level) {
            wrapper.level = level;
        }
    };
    return wrapper;
};
exports.ConsoleLogger = {
    w: wrapConsole(LogLevel.DEBUG),
    f: new TimeFormatter()
};
exports.NoLog = {
    w: {
        debug: () => { },
        info: () => { },
        warn: () => { },
        error: () => { }
    },
    f: {
        Debug: () => "",
        Error: () => "",
        Info: () => "",
        Warn: () => ""
    }
};
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
//# sourceMappingURL=logger.js.map