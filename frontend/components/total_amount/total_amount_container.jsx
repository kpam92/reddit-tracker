import { connect } from 'react-redux';
import TotalAmount from './total_amount'

import { updateAmount } from '../../actions/amount_actions'


const mapStateToProps = state => ({
  amount: state.amount
})

const mapDispatchToProps = dispatch => ({
  updateAmount: (amount) => dispatch(updateAmount(amount)),
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalAmount);
