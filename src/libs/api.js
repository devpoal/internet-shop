const api = {
	fetch: (url, options, type) => {
		return fetch(url, {
			...options,
			method: 'GET'
		}).then((response) => {
			return type === 'blob' ? response.blob() : response.json();
		}).then((data) => {
			return data;
		});
	},

	imageUrl: 'https://murmuring-tor-81614.herokuapp.com',

	getGoods: function (dealers) {
		return this.fetch(`https://murmuring-tor-81614.herokuapp.com/api/goods/${dealers ? `?dealers=${dealers.join(',')}` : ''}`);
	},

	getImage: function (url) {
		return this.fetch(`${this.imageUrl}${url}`, {}, 'blob');
	},
};

export default api;