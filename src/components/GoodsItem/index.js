import React from 'react';
import s from './GoodsItem.module.scss';
import api from '../../libs/api';
import { connect } from 'react-redux';
import { addGoods } from '../../actions';

const GoodsItem = ({ item, images, addGoods }) => (<div className={s['item']}>
	<div className={s['wrap-image']}>
		<img className={s['image']} src={images && images[item.image] ? images[item.image] : `${api.imageUrl}${item.image}`} alt={item.name} />
	</div>

	<div className={s['name']}>{item.name}</div>
	<div>{item.price.toFixed(2)}$</div>

	<div className={s['controls']}>
		<button className={s['buy']} onClick={() => {addGoods(item)}}>В корзину</button>
	</div>
</div>);

const mapStateToProps = state => ({
    images: state.images
});

const mapDispatchToProps = dispatch => ({
	addGoods: item => dispatch(addGoods(item))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GoodsItem);