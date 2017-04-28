export const UPDATE_AMOUNT = "UPDATE_AMOUNT";
export const CHANGE_AMOUNT = "CHANGE_AMOUNT";




export const updateAmount = total => ({
  type: UPDATE_AMOUNT,
  total
});

export const changeAmount = (oldTotal,newTotal) => ({
  type: CHANGE_AMOUNT,
  oldTotal,
  newTotal

});
