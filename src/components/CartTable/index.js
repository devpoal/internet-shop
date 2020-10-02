import React from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../actions';
import CartItem from '../CartItem';
import s from './CartTable.module.scss';
import { Link } from 'react-router-dom';

const CartTable = ({ goodsCart, clearCart }) => {
	const grouped = {};
	let totalPrice = 0;

	goodsCart.forEach(item => {
		totalPrice += item.price;

		if (grouped[item.idType]) {
			grouped[item.idType].priceType += item.price;
			grouped[item.idType].amount += 1;
		} else {
			grouped[item.idType] = {
				priceType: item.price,
				amount: 1,
				item: item
			}
		}
	});

	return (<div className={s['wrap-cart']}>
		<Link to="/internet-shop/" className={s['home']}>На главную</Link>
		{goodsCart.length > 0 && <button className={s['clear']} onClick={clearCart}>Очистить корзину</button>}

		<div className={s['cart']}>
			<div className={s['cart-row']}>
				<div className={s['cart-cell']}>Изображение</div>
				<div className={s['cart-cell']}>Имя</div>
				<div className={s['cart-cell']}>Цена</div>
				<div className={s['cart-cell']}>Кол-во</div>
				<div className={s['cart-cell']}></div>
			</div>
			{goodsCart.length ? Object.keys(grouped).map((key, index) => <CartItem key={index} group={grouped[key]} />) : <div className={s['cart-empty']}>Корзина пуста</div>}
		</div>

		<div className={s['total']}>Всего: {totalPrice.toFixed(2)}$</div>
	</div>);
}

const mapStateToProps = state => ({
	goodsCart: state.goodsCart
});

const mapDispatchToProps = dispatch => ({
	clearCart: item => dispatch(clearCart(item)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartTable);