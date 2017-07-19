import merge from 'lodash/merge';
import { RECEIVE_COMMENTS } from '../actions/result_actions';

const CommentsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_COMMENTS:
      // debugger;
      var current_comments = action.comments.data.children.slice(0,25)
      current_comments = current_comments.map(comment => comment = comment.data.body)
      return current_comments;
    default:
      return state;
  }
};

export default CommentsReducer;
