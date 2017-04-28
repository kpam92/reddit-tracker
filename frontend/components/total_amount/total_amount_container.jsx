import { connect } from 'react-redux';
import TotalAmount from './total_amount'


const mapStateToProps = state => ({
  amount: state.amount
})

const mapDispatchToProps = dispatch => ({

})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalAmount);
