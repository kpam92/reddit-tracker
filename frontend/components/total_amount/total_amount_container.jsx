import { connect } from 'react-redux';
import TotalAmount from './total_amount'


const mapStateToProps = state => ({
  amount: state.amount
})




export default connect(
  mapStateToProps,
  null
)(TotalAmount);
