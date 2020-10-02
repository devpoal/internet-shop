export const setDealers = dealers => ({
	type: 'SET_DEALERS',
	dealers
})

export const setGoods = goods => ({
	type: 'SET_GOODS_DATA',
	goods
})

export const setImages = images => ({
	type: 'SET_IMAGES',
	images
})

export const addGoods = item => ({
	type: 'ADD_GOODS',
	item
})

export const addAllGoods = data => ({
	type: 'ADD_ALL_GOODS',
	data
})

export const removeGoods = item => ({
	type: 'REMOVE_GOODS',
	item
})

export const removeTypeGoods = item => ({
	type: 'REMOVE_TYPE_GOODS',
	item
})

export const clearCart = () => ({
	type: 'CLEAR_CART',
})
