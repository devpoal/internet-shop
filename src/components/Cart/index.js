import React from 'react';
import { Link } from 'react-router-dom';
import s from './Cart.module.scss';
import { connect } from 'react-redux';

const Cart = ({ goodsCart }) => {
	return (
		<Link to="/cart" className={s['cart']}>
            <span>Кол-во заказов: {goodsCart.length}</span>
            <span className={s['link']}>Перейти в корзину</span>
		</Link>
	);
}

const mapStateToProps = state => ({
	goodsCart: state.goodsCart
});

export default connect(
	mapStateToProps
)(Cart);