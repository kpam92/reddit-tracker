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

  handleSubmit(){
    
  }

  render(){
    return(

    )
  };

};

export default ItemForm;
