import {RECEIVE_ITEM, RECEIVE_ITEMS, REMOVE_ITEM, UPDATE_ITEM } from '../actions/item_actions'
import merge from 'lodash/merge';
const initialState = {
  1: {
    id: 1,
    title: "Widget",
    qty: "2",
    price: 10,
    total: 20
  },
  2: {
    id: 2,
    title: "Cog",
    qty: "2",
    price: 15.99,
    total: 31.98
  }
};

const ItemsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ITEMS:
      const newState = {};
      action.items.forEach(item => newState[item.id] = item);
      return newState;
    case RECEIVE_ITEM:
      const newItem = {[action.item.id]: action.item}
      return merge({},state,newItem);
    case REMOVE_ITEM:
      const nextState = merge({},state);
      delete nextState[action.item_id];
      return nextState;
    case UPDATE_ITEM:
      const updatedState = merge({},state);
      updatedState[action.item.id] = action.item;
      return updatedState;
    default:
      return state;
  }
};

export default ItemsReducer;
