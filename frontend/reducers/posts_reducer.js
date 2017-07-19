import merge from 'lodash/merge';
import { CHANGE_POSTS } from '../actions/result_actions';

const PostsReducer = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_POSTS:
      return action.posts;
    default:
      return state;
  }
}


export default PostsReducer;
