const goodsData = (state = [], action) => {
	switch (action.type) {
		case 'SET_GOODS_DATA':
			return action.goods;
		default:
			return state
	}
}

export default goodsData;
