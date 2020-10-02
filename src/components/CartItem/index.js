import React from 'react';
import { connect } from 'react-redux';
import s from './CartItem.module.scss';
import api from '../../libs/api';
import { addGoods, removeGoods, removeTypeGoods } from '../../actions';
import cx from 'classnames';

const CartItem = ({ group, images, addGoods, removeGoods, removeTypeGoods }) => (<div className={s['cart-row']}>
	<div className={s['cart-cell']}>
		<div className={s['wrap-image']}>
			<img src={images && images[group.item.image] ? images[group.item.image] : `${api.imageUrl}${group.item.image}`} alt={group.item.name} className={s['image']}/>
		</div>
	</div>

	<div className={s['cart-cell']}>{group.item.name}</div>
	<div className={s['cart-cell']}>{group.priceType.toFixed(2)}$</div>
	<div className={s['cart-cell']}><span className={s['amount']}>Кол-во:</span>{group.amount}</div>

	<div className={cx(s['cart-cell'], s['cart-cell--controls'])}>
		<div className={s['controls']}>
			<button className={cx(s['button'], s['button--change'])} onClick={() => {addGoods(group.item)}}>+</button>
			<button className={cx(s['button'], s['button--change'])} onClick={() => {removeGoods(group.item)}}>-</button>
			<button className={s['button']} onClick={() => {removeTypeGoods(group.item)}}>Удалить наименование</button>
		</div>
	</div>
</div>);

const mapStateToProps = state => ({
	images: state.images
});

const mapDispatchToProps = dispatch => ({
	addGoods: item => dispatch(addGoods(item)),
	removeGoods: item => dispatch(removeGoods(item)),
	removeTypeGoods: item => dispatch(removeTypeGoods(item)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartItem);