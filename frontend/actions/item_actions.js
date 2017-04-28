

export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export const receiveItem = item => ({
  type: RECEIVE_ITEM,
  item
});

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

export const removeItem = item_id => ({
  type: REMOVE_ITEM,
  item_id
});

export const updateItem = item => ({
  type: UPDATE_ITEM,
  item
})
