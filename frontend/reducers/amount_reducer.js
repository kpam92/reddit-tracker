import { CHANGE_AMOUNT } from '../actions/amount_actions'
import merge from 'lodash/merge';

const initialState = {
    subTotal: 51.98,
    tax: (2.60).toFixed(2),
    total: 54.58,
};

const AmountReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_AMOUNT:
      const difference = (parseFloat(action.newTotal) - parseFloat(action.oldTotal)).toFixed(2);
      const newSubTotal = (parseFloat(difference) + parseFloat(state.subTotal)).toFixed(2)
      const newTax = (parseFloat(newSubTotal) * .05).toFixed(2);
      const newTotal = (parseFloat(newSubTotal) + parseFloat(newTax)).toFixed(2);
      const updatedState = {subTotal: newSubTotal, tax: newTax, total: newTotal};
      return updatedState;
    default:
      return state;
  }
};

export default AmountReducer;
