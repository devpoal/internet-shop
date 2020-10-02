import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import routes from '../routes';
import s from './App.module.scss';
import StorageCart from './StorageCart';

const App = () => (
	<div className={s['App']}>
		<StorageCart />
		<Router>
			<Switch>
				{routes.map(route => <Route exact key={route.path} path={route.path} component={route.component} />)}
			</Switch>
		</Router>
	</div>
);

export default App;
