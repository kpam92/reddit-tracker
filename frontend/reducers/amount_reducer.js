import { UPDATE_AMOUNT, CHANGE_AMOUNT } from '../actions/amount_actions'
import merge from 'lodash/merge';

const initialState = {
    subTotal: 51.98,
    tax: (2.60).toFixed(2),
    total: 54.58,
};

const AmountReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_AMOUNT:
      // going to make it a number in the function call
      const newSubTotal = (action.total + parseFloat(state.subTotal)).toFixed(2)
      const newTax = (parseFloat(newSubTotal) * .05).toFixed(2);
      const newTotal = (parseFloat(newSubTotal) + parseFloat(newTax)).toFixed(2);
      const updatedState = {subTotal: newSubTotal, tax: newTax, total: newTotal};
      return updatedState;
    case CHANGE_AMOUNT:
      // going to make it a number in the function call
      const difference = (parseFloat(action.newTotal) - parseFloat(action.oldTotal)).toFixed(2);
      const newSubTotal1 = (parseFloat(difference) + parseFloat(state.subTotal)).toFixed(2)
      const newTax1 = (parseFloat(newSubTotal1) * .05).toFixed(2);
      const newTotal1 = (parseFloat(newSubTotal1) + parseFloat(newTax1)).toFixed(2);
      const updatedState1 = {subTotal: newSubTotal1, tax: newTax1, total: newTotal1};
      return updatedState1;
    default:
      return state;
  }
};

export default AmountReducer;
