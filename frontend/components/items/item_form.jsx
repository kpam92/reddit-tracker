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
    const newTotal = (parseFloat(this.state.price) * parseFloat(this.state.qty)).toFixed(2);
    const newItem = Object.assign({},this.state, {id: uniqueId(), total: newTotal});
    this.props.receiveItem(newItem);
    this.props.changeAmount(0,parseFloat(newItem['total']))
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
  update_money(property) {
    return e => this.setState({[property]: parseFloat(e.target.value).toFixed(2)})
  }
  render() {
    return (
      <form className="item-form" onSubmit={this.handleSubmit}>
        <label><span className='form-label'>Item:</span>
          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="Sushi"
            onChange={this.update('title')}
            required/>
        </label>
        <label><span className='form-label'>Qty:</span>
          <input
            className="input"
            ref="qty"
            type="number"
            min='0'
            value={this.state.qty}
            placeholder="1"
            onChange={this.update('qty')}
            required></input>
        </label>
        <label><span className='form-label'>Price:$</span>
          <input
            className="input"
            type="number"
            step=".01"
            min ='0'
            ref="price"
            value={this.state.price}
            placeholder="(no commas)"
            onChange={this.update_money('price')}
            required></input>
        </label>
        <button className="create-button">Add item</button>
      </form>
    );
  }

};

export default ItemForm;
