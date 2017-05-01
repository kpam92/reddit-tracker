import { connect } from 'react-redux';
import TotalAmount from './total_amount';

import { changeTax, changeAmount } from '../../actions/amount_actions';


const mapStateToProps = state => ({
  amount: state.amount
});

const mapDispatchToProps = dispatch => ({
  changeTax: tax => dispatch(changeTax(tax)),
  changeAmount: (oldAmount,newAmount) => dispatch(changeAmount(oldAmount,newAmount))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalAmount);
