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
        <h4>Subtotal: {this.props.amount.subTotal}</h4>
        <h4>Tax(5%): {this.props.amount.tax}</h4>
        <h4>Total: {this.props.amount.total}</h4>
      </div>
    )
  }
};

export default TotalAmount
