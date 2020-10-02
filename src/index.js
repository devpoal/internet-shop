import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { setDealers } from './actions'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.reactApp.start = (params) => {
	if (params && params.dealers && params.dealers.length) {
		store.dispatch(setDealers(params.dealers))
	}

	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)
}
