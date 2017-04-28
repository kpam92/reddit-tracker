import React from 'react';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.removeItem(this.props.item.id);
  }
  render(){
    const { item } = this.props;
    return(
      <tbody>
        <tr>
          <th>{item.title}</th>
          <th>{item.qty}</th>
          <th>${item.price}</th>
          <th>${item.total}</th>
          <th><button>Edit Item</button></th>
          <th><button onClick={this.handleDelete}>Remove</button></th>
        </tr>
      </tbody>

    )
  }
};

export default ItemDetail;
