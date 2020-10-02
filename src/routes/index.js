import Notfound from './Notfound';
import Main from './Main';
import Cart from './Cart';

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/cart',
		component: Cart
	}
];

routes.push({
	path: '*',
	component: Notfound
});

export default routes;