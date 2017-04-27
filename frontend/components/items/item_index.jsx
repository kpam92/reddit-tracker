import React from 'react';

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
      </div>
    )
  };
};

export default ItemIndex;
