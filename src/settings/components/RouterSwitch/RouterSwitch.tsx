import * as React from 'react';
import { Route, Switch } from 'react-router';

import { RouteConfig } from 'react-router-config';

// eslint-disable-next-line react/display-name
export const RouterSwitch = (routes: RouteConfig[]) => () => (
	<Switch>
		{routes.map(({ component: Comp, props: componentProps, ...route }) => (
			<Route
				key={route.path as string}
				{...route}
				render={(props) => {
					return <Comp {...props} {...componentProps} route={route} key={route.path as string} />;
				}}
			/>
		),
		)}
	</Switch>
);
