
export interface Logger {
  Debug(tag: string, msg: string): void
  Info(tag: string, msg: string): void
  Warning(tag: string, msg: string): void
  Error(tag: string, msg: string): void
}

export class Console implements Logger {
  Debug(tag: any, msg: any): void {
    console.debug(`${new Date().toLocaleTimeString()} Debug: ${tag}  --->  ${msg}`)
  }

  Error(tag: any, msg: any): void {
    console.error(`${new Date().toLocaleTimeString()} Error: ${tag}  --->  ${msg}`)
  }

  Info(tag: any, msg: any): void {
    console.info(`${new Date().toLocaleTimeString()} Info: ${tag}  --->  ${msg}`)
  }

  Warning(tag: any, msg: any): void {
    console.warn(`${new Date().toLocaleTimeString()} Warning: ${tag}  --->  ${msg}`)
  }

}