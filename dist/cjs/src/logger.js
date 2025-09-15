"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoLog = exports.ConsoleLogger = exports.TimeFormatter = void 0;
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
exports.ConsoleLogger = {
    w: console,
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
 * 暂没有找到 console.debug/info/warn/error 类似 skip stack 的功能，无法对 console 方法做二次
 * 封装，否则 console 输出的文件名与行号都是二次封装文件的文件名与行号，不方便查看日志信息
 *  todo: 是否有其他可靠的方式做如下的替换?
 * Logger.Debug(tag, msg) => Logger.w.debug(Logger.f.Debug(tag, msg))
 *
 */
//# sourceMappingURL=logger.js.map