import { CHANGE_TAX, CHANGE_AMOUNT } from '../actions/amount_actions'
import merge from 'lodash/merge';

const initialState = {
    subTotal: 51.98,
    currTax: 0.05,
    tax: (2.60).toFixed(2),
    total: 54.58,
};

const AmountReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_AMOUNT:
      const difference = (parseFloat(action.newTotal) - parseFloat(action.oldTotal)).toFixed(2);
      const newSubTotal = (parseFloat(difference) + parseFloat(state.subTotal)).toFixed(2)
      const newTax = (parseFloat(newSubTotal) * state.currTax).toFixed(2);
      const newTotal = (parseFloat(newSubTotal) + parseFloat(newTax)).toFixed(2);
      const updatedState = {subTotal: newSubTotal, tax: newTax, total: newTotal, currTax: state.currTax};
      return updatedState;
    case CHANGE_TAX:
    // tax be changed to decimal when called
    // amount change will be called right after change tax
    // i.e. changeAmount(0,0)
      const newState = merge({},state)
      debugger;
      newState["currTax"] = action.tax;
      debugger;
      return newState;
    default:
      return state;
  }
};

export default AmountReducer;
