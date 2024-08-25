import { combineReducers } from 'redux';
import productsReducer from './products/productSlice';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
