import { combineReducers } from 'redux';
import goodsData from './goodsData';
import goodsCart from './goodsCart';
import images from './images';
import dealers from './dealers';

export default combineReducers({
	dealers,
	goodsData,
	goodsCart,
	images
});
