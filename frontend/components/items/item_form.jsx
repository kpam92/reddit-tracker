import React from 'react';
import { uniqueId } from '../../util/idGenerator';

class ItemForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      qty: "",
      price: "",
      total: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    const newItem = Object.assign({},this.state, {id: uniqueId()});
    this.props.receiveItem(newItem);
    this.setState({
      title: "",
      qty: "",
      price: "",
      total: ""
    })
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Item:
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="Sushi"
            onChange={this.update('title')}
            required/>
        </label>
        <label>Qty:
          <input
            className="input"
            ref="qty"
            value={this.state.qty}
            placeholder="1"
            onChange={this.update('qty')}
            required></input>
        </label>
        <label>Price:$
          <input
            className="input"
            ref="price"
            value={this.state.price}
            placeholder="(no commas)"
            onChange={this.update('price')}
            required></input>
        </label>
        <button className="create-button">Add item</button>
      </form>
    );
  }

};

export default ItemForm;
