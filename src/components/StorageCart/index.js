import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addAllGoods } from '../../actions';

const StorageCart = ({ cart, addAllGoods }) => {
	useEffect(() => {
		const storageCart = JSON.parse(localStorage.getItem('cart'));
		
		if (storageCart && storageCart.length) {
			addAllGoods(storageCart)
		}
	}, [addAllGoods])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	return null;
}

const mapStateToProps = state => ({
	cart: state.goodsCart
});

const mapDispatchToProps = dispatch => ({
	addAllGoods: data => dispatch(addAllGoods(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StorageCart);