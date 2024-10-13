
export interface Logger {
  Debug(tag: string, msg: string): void
  Info(tag: string, msg: string): void
  Warning(tag: string, msg: string): void
  Error(tag: string, msg: string): void
}

export class ConsoleLogger implements Logger {
  Debug(tag: any, msg: any): void {
    console.debug(`${new Date().toISOString()} Debug: ${tag}  --->  ${msg}`)
  }

  Error(tag: any, msg: any): void {
    console.error(`${new Date().toISOString()} Error: ${tag}  --->  ${msg}`)
  }

  Info(tag: any, msg: any): void {
    console.info(`${new Date().toISOString()} Info: ${tag}  --->  ${msg}`)
  }

  Warning(tag: any, msg: any): void {
    console.warn(`${new Date().toISOString()} Warning: ${tag}  --->  ${msg}`)
  }

}