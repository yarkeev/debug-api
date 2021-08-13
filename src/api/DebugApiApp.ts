import { ENerveRestLogLevel, Log, NerveRestApp } from '@nervejs/rest';

export abstract class DebugApiApp extends NerveRestApp {

	setLogLevel(level: ENerveRestLogLevel) {
		super.setLogLevel(level);

		Log.setLevel(level);
	}

}
