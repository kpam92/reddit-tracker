import React from 'react';

class TotalAmount extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }
  render(){
    return(
      <div className='grand-total'>
        <h3>Receipt</h3>
        <h4><span>Subtotal:</span> ${this.props.amount.subTotal}</h4>
        <h4><span>Tax(5%):</span> ${this.props.amount.tax}</h4>
        <h4><span>Total:</span> <span className='grand'>${this.props.amount.total}</span></h4>
      </div>
    )
  }
};

export default TotalAmount
