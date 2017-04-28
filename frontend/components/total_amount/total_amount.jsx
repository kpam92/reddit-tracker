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
        <h4><span>Subtotal:</span> ${this.props.amount.subTotal}</h4>
        <h4><span>Tax(5%):</span> ${this.props.amount.tax}</h4>
        <h4><span>Total:</span> ${this.props.amount.total}</h4>
      </div>
    )
  }
};

export default TotalAmount
