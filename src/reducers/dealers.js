const dealers = (state = [], action) => {
	switch (action.type) {
		case 'SET_DEALERS':
			return action.dealers;
		default:
			return state
	}
}

export default dealers;
