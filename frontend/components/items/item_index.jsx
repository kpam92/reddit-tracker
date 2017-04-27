import React from 'react';
import ItemForm from './item_form';

class ItemIndex extends React.Component {
  constructor(){
    super();

  };

  render(){
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
        </table>
        <ItemForm receiveItem={this.props.receiveItem}/>
      </div>
    )
  };
};

export default ItemIndex;
