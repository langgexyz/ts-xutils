
export interface LogWriter {
	debug(msg: string): void
	info(msg: string): void
	warn(msg: string): void
	error(msg: string): void
	level?: LogLevel
	setLevel?(level: LogLevel): void
}

export interface LogFormatter {
	Debug(tag: string, msg: string): string
	Info(tag: string, msg: string): string
	Warn(tag: string, msg: string): string
	Error(tag: string, msg: string): string
}

export interface Logger {
	w: LogWriter
	f: LogFormatter
}

// 日志级别枚举
export enum LogLevel {
	DEBUG = 0,
	INFO = 1,
	WARN = 2,
	ERROR = 3,
	NONE = 4
}

export class TimeFormatter implements LogFormatter {
  Debug(tag: any, msg: any): string {
    return `${new Date().toISOString()} Debug: ${tag}  --->  ${msg}`
  }

  Error(tag: any, msg: any): string {
		return `${new Date().toISOString()} Error: ${tag}  --->  ${msg}`
  }

  Info(tag: any, msg: any): string {
		return `${new Date().toISOString()} Info: ${tag}  --->  ${msg}`
  }

  Warn(tag: any, msg: any): string {
		return `${new Date().toISOString()} Warn: ${tag}  --->  ${msg}`
  }
}

const wrapConsole = (defaultLevel: LogLevel = LogLevel.DEBUG): LogWriter => {
	const wrapper = {
		level: defaultLevel,
		debug(msg: string): void {
			if (LogLevel.DEBUG >= wrapper.level) {
				console.debug(msg)
			}
		},
		info(msg: string): void {
			if (LogLevel.INFO >= wrapper.level) {
				console.info(msg)
			}
		},
		warn(msg: string): void {
			if (LogLevel.WARN >= wrapper.level) {
				console.warn(msg)
			}
		},
		error(msg: string): void {
			if (LogLevel.ERROR >= wrapper.level) {
				console.error(msg)
			}
		},
		setLevel(level: LogLevel): void {
			wrapper.level = level
		}
	}
	return wrapper
}

export const ConsoleLogger: Logger = {
	w: wrapConsole(LogLevel.DEBUG),
	f: new TimeFormatter()
}

export const NoLog: Logger = {
	w: {
		debug: ()=>{},
		info: ()=>{},
		warn: ()=>{},
		error: ()=>{}
	},
	f: {
		Debug: ()=>"",
		Error: ()=>"",
		Info: ()=>"",
		Warn: ()=>""
	}
}


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
