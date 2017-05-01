# Invoice Editor

[Invoice Editor live][host]

[host]: https://kpam92.github.io/react-invoice/


This Invoice Editor is a single page React/Redux application for creating personal invoices, where users can create, edit, and delete items.

<a href="https://kpam92.github.io/react-invoice/">
  <img src="https://github.com/kpam92/react-invoice/raw/master/styles/screenshot.png"/>
</a>

## Features & Implementation

### Items

  Items are stored in state with variables `title`, `quantity`, `price`, `total`, and `album_id`. Items are rendered in the `ItemIndex` component, which maps over the items state, and renders each item in the `ItemDetail` component. The `ItemForm` at the top of the page creates new items, while a react-modal in `ItemDetail` allows the user to edit the component. A button in each item detail also deletes specific items.
  ```javascript
  const exampleItemState = {
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
  ```
### Total Amount

The `TotalAmount` state contains `subTotal`, `tax`, and `total`.
```javascript
const exampleTotalAmountState = {
    subTotal: 51.98,
    currTax: 0.05,
    tax: (2.60).toFixed(2),
    total: 54.58,
};
```

The `TotalAmount` component renders each variable above, and state changes through actions involving item creation,edit, and deletion.

## Actions
  The actions below occur when the user creates, edits, and deletes items.

###Items

  Items have three actions, receiveItem(item), updateItem(item), and removeItem(item_id). Each of these, except removeItem, takes an entire item as an argument, and either adds it to state, or updates its existing copy. removeItem finds and deletes the object in state with matching id.

###Total Amount

  The first action that deals with total amount is changeAmount(oldAmount,newAmount), which takes an old amount, and the new amount. This is called after each of three item actions. the old amount is subtracted from the new amount, and the result is then added to the states subtotal; calculations for the new tax and new grand total follow.
  ```javascript

  // Used for creating a new item
  changeAmount(0, 100) // diff = (100 - 0); newState.subTotal += diff

  // Used for deleting an item
  changeAmount(100, 0) // diff = (0 - 100); newState.subTotal += diff

  // Used for editing an item
  changeAmount(100,50) // diff = (50 - 100); newState.subTotal += diff

  ```

  The second action, changeTax(tax), takes in a number as an argument, and alters the currTax of the amount state. When this is called after submission of the tax form in the component, it changes the currTax, then calls changeAmount(0,0) to update the other values with the new tax.

## Future Directions for the Project

I plan to add small adjustments to the project to provide better UX for the user

### Jest Testing

In process of implementing Jest tests on Redux reducers.

### Save and Edit Invoices

Right now, the user can only create one invoice at a time. In the future, user will be able to save entire invoices and start creating new ones. Tabs of saved invoices will appear on the bottom of the screen, and will be available to be viewed and edited when clicked on.

### Make Tax Changeable

Also, a future adjustment is to make the tax section adjustable as it varies from area to area. This would include changing the total amount state to include a tax variable that can be changed with a new amount dispatch action.
