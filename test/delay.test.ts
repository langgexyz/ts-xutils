import {Delay} from "../src/delay"
import {Millisecond, Second} from "../src/duration"



describe("delay", ()=>{
	let testCases = [Second, 2*Second, 3*Second, 4*Second, 500*Millisecond, Second+100*Millisecond]
	let sum = 0
	for (const testCase of testCases) {
		sum += testCase
	}
	jest.setTimeout((sum + Second)/Millisecond)

	test("delay", async ()=>{

		for (const v of testCases) {
			let t1 = Date.now()
			await Delay(v)
			expect(Math.abs(Date.now()-t1 - v/Millisecond)).toBeLessThan(10)
		}
	})
})

