import React from 'react';
import ItemForm from './item_form';
import ItemDetail from './item_detail';
import TotalAmount from '../total_amount/total_amount';

class ItemIndex extends React.Component {
  constructor(){
    super();

  };

  render(){
    const { items, removeItem, updateItem, receiveItem } = this.props;
    const itemDetails = items.map(item => (
        <ItemDetail
          key={`item-list-detail${item.id}`}
          item={item}
          removeItem={ removeItem }
          updateItem= { updateItem } />

      )
    );
    return(
      <div>
        <ItemForm receiveItem={receiveItem}/>
        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </tbody>
          {itemDetails}
        </table>
        <TotalAmount/>
      </div>
    )
  };
};

export default ItemIndex;
