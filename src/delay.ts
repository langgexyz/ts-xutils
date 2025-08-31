import {Duration, Millisecond} from "./duration"

export async function Delay(d: Duration) {
	return new Promise<void>(resolve => {
		setTimeout(()=>{
			resolve()
		}, d/Millisecond)
	})
}
