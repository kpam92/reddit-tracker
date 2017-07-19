
import { combineReducers } from 'redux';
import CommentsReducer from './comments_reducer';
import PostsReducer from './posts_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer
});

export default rootReducer;
