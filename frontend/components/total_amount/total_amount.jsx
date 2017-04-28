import React from 'react';

class TotalAmount extends React.Component {
  constructor(props) {
    super(props)
    const subTot = (this.props.items.reduce((a,b) => a.total + b.total)).toFixed(2);
    const tax = (subTot * 0.05).toFixed(2);
    this.state = {
      subTotal: subTot,
      tax: tax,
      total: (parseFloat(subTot) + parseFloat(tax)).toFixed(2)
    }
  }

  componentDidMount(){
  }
  render(){
    const { items } = this.props;

    return(
      <div>
        <h4>Subtotal: {this.state.subTotal}</h4>
        <h4>Tax(5%): {this.state.tax}</h4>
        <h4>Total: {this.state.total}</h4>
      </div>
    )
  }
};

export default TotalAmount
