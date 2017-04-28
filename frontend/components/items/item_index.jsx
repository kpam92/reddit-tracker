import React from 'react';
import ItemForm from './item_form';
import ItemDetail from './item_detail';

class ItemIndex extends React.Component {
  constructor(){
    super();

  };

  render(){
    const { items, receiveItem } = this.props;
    const itemDetails = items.map(item => (
        <ItemDetail
          key={`item-list-detail${item.id}`}
          item={item}
          receiveItem={ receiveItem } />
      )
    );
    return(
      <div>
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
        <ItemForm receiveItem={receiveItem}/>
      </div>
    )
  };
};

export default ItemIndex;
