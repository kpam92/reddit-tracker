import React from 'react';

class TotalAmount extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  render(){
    return(
      <div className='grand-total'>
        <h3>Receipt</h3>
        <h4><span>Subtotal:</span> ${this.props.amount.subTotal}</h4>
        <h4><span>Tax(5%):</span> ${this.props.amount.tax}</h4>
        <h4><span>Total:</span> <span className='grand'>${this.props.amount.total}</span></h4>
        <h4>
          <form className="item-form" onSubmit={this.handleSubmit}>
            <label><span className='form-label'>Item:</span>
              <input
                className="input"
                ref="tax"
                value={this.props.amount.currTax}
                placeholder="i.e. Service Fees"
                onChange={this.update('title')}
                required/>
            </label>
            <button className="create-button">Add item</button>
          </form>
        </h4>
      </div>
    )
  }
};

export default TotalAmount
