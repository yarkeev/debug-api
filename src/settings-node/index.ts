import * as express from 'express';
import * as path from 'path';

export const startSettings = (port = 8000) => {
	const app = express();

	app.use(express.static(path.resolve(process.cwd(), 'node_modules/debug-api/dist')));

	app.get('/', (req: express.Request, res: express.Response) => {
		res.send(`
			<!DOCTYPE html>
			<html lang="ru">
			
			<head>
				<meta charset="UTF-8">
			</head>
			<body>
				<div id="root"></div>

				<script type="text/javascript" src="/js/settings.js"></script>
			</body>
			</html>
		`);
	});

	app.listen(port);
};
