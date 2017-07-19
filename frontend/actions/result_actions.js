export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
import * as APIUtil from '../util/result_api_util'

export const receiveComments = comments => ({
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

export const changeComments = (username) => dispatch => (
  APIUtil.fetchComments(username).then(comments => (
    dispatch(receiveComments(comments))
  ))
)
