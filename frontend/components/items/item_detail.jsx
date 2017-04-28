import React from 'react';
import UpdateForm from './update_form';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {update: false};
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  toggleUpdate(e) {
    e.preventDefault();
    this.setState({ update: !this.state.update });
  }

  handleDelete(e){
    e.preventDefault();
    const { removeItem, item } = this.props;
    removeItem(item.id);
  }
  render(){
    const { item } = this.props;
    let update;
    if (this.state.update) {
      update = <UpdateForm item ={ item } />;
    }
    return(

      <tbody>
        <tr>
          <td>{item.title}</td>
          <td>{item.qty}</td>
          <td>${item.price}</td>
          <td>${item.total}</td>
          <td><button onClick={this.toggleUpdate}>Edit Item</button></td>
          <td><button onClick={this.handleDelete}>Remove</button></td>
          <td>{update}</td>
        </tr>
      </tbody>

    )
  }
};

export default ItemDetail;
