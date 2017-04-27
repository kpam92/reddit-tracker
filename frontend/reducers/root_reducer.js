import { combineReducers } from 'redux';
import ItemsReducer from './items_reducer';

const rootReducer = combineReducers({
  items: ItemsReducer
});

export default rootReducer;
