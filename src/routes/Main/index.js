import React from 'react';
import Cart from '../../components/Cart';
// import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Table from '../../components/List';
// import AddTodo from '../../containers/AddTodo';
// import VisibleTodoList from '../../containers/VisibleTodoList';

const Main = () => (<div>
	<Header />

	<div>
		<Cart />
		<Table />
		{/* <AddTodo />
		<VisibleTodoList />
		<Footer /> */}
	</div>
</div>);


export default Main;