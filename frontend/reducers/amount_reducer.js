import {UPDATE_AMOUNT } from '../actions/amount_actions'
import merge from 'lodash/merge';
const initialState = {
    subTotal: 51.98,
    tax: 2.60,
    total: 54.58,
};

const AmountReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_AMOUNT:
      // going to make it a number in the function call
      const newSubTotal = (action.total + parseFloat(state.subTotal)).toFixed(2)
      const newTax = (newSubTotal * .05).toFixed(2);
      const newTotal = (parseFloat(newSubTotal) + parseFloat(newTax)).toFixed(2);
      const updatedState = {subTotal: newSubTotal, tax: newTax, total: newTotal};
      return updatedState;
    default:
      return state;
  }
};

export default AmountReducer;
