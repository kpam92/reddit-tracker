import {RECEIVE_ITEM, RECEIVE_ITEMS} from '../actions/item_actions'

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
    default:
      return state;
  }
};

export default ItemsReducer;
