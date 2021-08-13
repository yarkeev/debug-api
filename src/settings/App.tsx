import * as React from 'react';

import { Router, RouterPopups } from './Router';

export class App extends React.Component {

	render() {
		return (
			<>
				<Router/>
				<RouterPopups/>
			</>
		);
	}

}
