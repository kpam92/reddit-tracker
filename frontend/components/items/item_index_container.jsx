import { connect } from 'react-redux';
// import ItemIndex from './item_index'

import { receiveItem, receiveItems } from '../../actions/item_actions'
import allItems from '../../reducers/selectors'

const mapStateToProps = state => ({
  items: allItems(state)
})

const mapDispatchToProps = dispatch => (
  receiveItem: (item) => dispatch(receiveItem(item)),
  receiveItems: () => dispatch(receiveItems())
)
