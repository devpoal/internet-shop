const goodsCart = (state = [], action) => {
	switch (action.type) {
		case 'ADD_GOODS':
			return [
				...state,
				action.item
			]
		case 'ADD_ALL_GOODS':
			return action.data
		case 'REMOVE_GOODS':
			let removed = false;

			state.forEach((goods, index) => {
				if (goods.idType === action.item.idType && !removed) {
					state.splice(index, 1);
					removed = true;
				}
			});

			return [...state];
		case 'REMOVE_TYPE_GOODS':
			let newState = [];

			state.forEach(goods => {
				if (goods.idType !== action.item.idType) {
					newState.push(goods);
				}
			});

			return [
				...newState
			]
		case 'CLEAR_CART':
			return []
		default:
			return state
	}
}

export default goodsCart;
