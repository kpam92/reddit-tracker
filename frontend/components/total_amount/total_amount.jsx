import React from 'react';

class TotalAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTax: this.props.amount.currTax * 100 }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const newTax = (this.state.newTax * .01)
    this.props.changeTax(newTax);
    this.props.changeAmount(0,0);
    this.setState({ newTax: this.props.amount.currTax * 100 });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  render(){
    return(
      <div className='grand-total'>
        <h3>Receipt</h3>
        <h4><span>Subtotal:</span> ${this.props.amount.subTotal}</h4>
        <h4><span>Tax({parseInt(this.props.amount.currTax * 100)}%):</span> ${this.props.amount.tax}</h4>
        <h4><span>Total:</span> <span className='grand'>${this.props.amount.total}</span></h4>
        <br/>
        <br/>
        <h4>
          <form className="item-form" onSubmit={this.handleSubmit}>
            <label><span className='form-label'>Change Tax (steps 1%):</span>
              <input
                className="input"
                ref="tax"
                type="number"
                min="0"
                step="1"
                value={this.state.newTax}
                placeholder="i.e. Service Fees"
                onChange={this.update('newTax')}
                required/>%
            </label>
            <button className="create-button">Submit</button>
          </form>
        </h4>
      </div>
    )
  }
};

export default TotalAmount
