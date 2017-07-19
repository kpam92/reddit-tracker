export const CHANGE_COMMENTS = "CHANGE_COMMENTS";
export const CHANGE_POSTS = "CHANGE_POSTS";
import * as APIUtil from '../util/result_api_util'

export const changeComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const changePosts = (username) => dispatch => (
  APIUtil.fetchPosts(username).then(posts => (
    dispatch(receivePosts(posts))
  ))
)

export const changeComment = (username) => dispatch => (
  APIUtil.fetchComments(username).then(comments => (
    dispatch(receiveComments(comments))
  ))
)
