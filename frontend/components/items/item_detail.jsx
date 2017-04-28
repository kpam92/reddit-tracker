import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const { item } = this.props;
    return(
      <tbody>
        <tr>
          <tr>
            <th>{item.title}</th>
            <th>{item.qty}</th>
            <th>${item.price}</th>
            <th>${item.total}</th>
            <th><button>Edit Item</button></th>
            <th><button>Remove</button></th>
          </tr>
        </tr>
      </tbody>

    )
  }
};

export default ItemDetail;
