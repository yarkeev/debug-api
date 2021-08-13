import { renderRoutes, RouteConfig } from 'react-router-config';

import { URLS } from '@constants';

import {
	Main,
} from '@containers';

import { RouterSwitch } from '@components/RouterSwitch';

export const routes: RouteConfig[] = [
	{
		path: URLS.MAIN,
		component: Main,
		exact: true,
	},

];

export const popups: RouteConfig[] = [

];

// eslint-disable-next-line new-cap
export const Router = RouterSwitch(routes);

export const RouterPopups = () => {
	return renderRoutes(popups);
};
