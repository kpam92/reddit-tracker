import { connect } from 'react-redux';
import TotalAmount from './total_amount'

import { changeTax } from '../../actions/amount_actions'

const mapStateToProps = state => ({
  amount: state.amount
});

const mapDispatchToProps = dispatch => ({
  changeTax: tax => dispatch(changeTax(tax))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalAmount);
