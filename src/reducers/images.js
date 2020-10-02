const images = (state = null, action) => {
	switch (action.type) {
		case 'SET_IMAGES':
			return action.images;
		default:
			return state
	}
}

export default images;
