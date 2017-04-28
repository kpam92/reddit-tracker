export const CHANGE_AMOUNT = "CHANGE_AMOUNT";

export const changeAmount = (oldTotal,newTotal) => ({
  type: CHANGE_AMOUNT,
  oldTotal,
  newTotal

});
