import { combineReducers } from 'redux';
import ItemsReducer from './items_reducer';
import AmountReducer from './amount_reducer';

const rootReducer = combineReducers({
  items: ItemsReducer,
  amount: AmountReducer
});

export default rootReducer;
