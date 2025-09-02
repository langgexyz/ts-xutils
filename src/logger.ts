
export interface LogWriter {
	debug(msg: string): void
	info(msg: string): void
	warn(msg: string): void
	error(msg: string): void
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

export const ConsoleLogger: Logger = {
	w: console,
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
 * 暂没有找到 console.debug/info/warn/error 类似 skip stack 的功能，无法对 console 方法做二次
 * 封装，否则 console 输出的文件名与行号都是二次封装文件的文件名与行号，不方便查看日志信息
 *  todo: 是否有其他可靠的方式做如下的替换?
 * Logger.Debug(tag, msg) => Logger.w.debug(Logger.f.Debug(tag, msg))
 *
 */
