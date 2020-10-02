import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setGoods, setImages } from '../../actions';
import api from '../../libs/api';
import GoodsItem from '../GoodsItem';
import s from './List.module.scss';

const List = ({ goods, dealers, setGoods, setImages }) => {
	const [loading, setLoading] = useState(true);
	const [goodsList, setGoodsList] = useState(goods);
	
	useEffect(() => {
		if (!goods.length) {
			api.getGoods(dealers ? dealers : null).then(data => {
				data.map((item, index) => {
					return item.idType = index;
				});
				setLoading(false);
				setGoods(data);
			});
		} else {
			setLoading(false);
			setGoodsList(goods);
		}
	}, [goods, dealers, setGoods]);

	useEffect(() => {
		const promises = [];

		goods.forEach(item => {
			promises.push(api.getImage(item.image).then(resp => {
				return {
					[`image${item.idType}`]: {
						src: URL.createObjectURL(resp),
						name: item.image
					}
				};
			}));
		});

		Promise.all(promises).then(responseImgs => {
			const images = {};
			
			responseImgs.forEach(item => {
				images[item[Object.keys(item)].name] = item[Object.keys(item)].src;
			});

			setImages(images)
		})
	}, [goods, setImages]);

	return (
		<div>
			{loading ?
				<div>Загрузка...</div> :
					!goodsList.length ? 
						<div>Товаров нет</div> : <div className={s['list']}>
							{goodsList.map(item => <GoodsItem key={item.idType} item={item} />)}
						</div>}
		</div>
	);
}

const mapStateToProps = state => ({
	goods: state.goodsData,
	dealers: state.dealers
});

const mapDispatchToProps = dispatch => ({
	setGoods: data => dispatch(setGoods(data)),
	setImages: data => dispatch(setImages(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);