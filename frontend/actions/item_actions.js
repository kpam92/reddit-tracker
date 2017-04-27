

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});
