import {ConsoleLogger as Log} from "../src/logger"


test("debug", async ()=>{
	Log.w.debug(Log.f.Debug("tag", "test debug log"))
})
