import { NerveRestController, ENerveRestHTTPMethod, Log } from '@nervejs/rest';
import { Request, Response } from 'express';

export class DebugApiBaseController<T = null> extends NerveRestController {

	protected DEBUG: T = {} as T;
	protected DEBUG_COOKIE_NAME = '__DEBUG_API_SETTINGS__';

	protected parseDebug(req: Request) {
		try {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
			const debugJSON = req.cookies[this.DEBUG_COOKIE_NAME];

			if (debugJSON) {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				this.DEBUG = (JSON.parse(debugJSON)?.controllers?.[this.constructor.name] || {}) as T;
			} else {
				Log.info(`Debug cookie "${this.DEBUG_COOKIE_NAME}" is empty`);
			}
		} catch (err) {
			Log.error(`Failed parse debug cookie "${this.DEBUG_COOKIE_NAME}": `, err);
		}
	}

	// eslint-disable-next-line @typescript-eslint/require-await
	protected async beforeAction(method: string, req: Request, res: Response) {
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-From, X-App-Id, X-Client-Version, Content-Type');

		if (req.method === ENerveRestHTTPMethod.OPTIONS) {
			return {
				isAbort: true,
				data: '',
			};
		}

		return { isAbort: false };
	}

}
