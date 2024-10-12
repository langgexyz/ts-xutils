
export class AssertError implements Error {
	message: string
	name: string = "AssertError"

	constructor(m: string) {
		this.message = m
	}
}

export function assert(condition: boolean, msg: string = "") {
	if (!condition) {
		console.assert(condition, msg)
		throw new AssertError(msg)
	}
}
