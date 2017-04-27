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

  render(){
    return(

    )
  };

};

export default ItemForm;
