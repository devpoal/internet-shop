import React from 'react';
import Header from '../../components/Header';
import CartTable from '../../components/CartTable';

const Cart = () => (<div>
	<Header type={'cart'}/>
	<CartTable />
</div>);

export default Cart;