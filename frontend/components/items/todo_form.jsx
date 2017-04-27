import React from 'react';
import { uniqueId } from '../../util/idGenerator';

class ItemForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      qty: 0,
      price: 0,
      total: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e){
    e.preventDefault();
    const newItem = Object.assign({},this.state, {id: uniqueId()});
    this.props.receiveItem(newItem);
    this.setState({
      title: "",
      qty: 0,
      price: 0,
      total: 0
    })
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
        <label>Body:
          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="2% or whatever is on sale!"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }

};

export default ItemForm;
