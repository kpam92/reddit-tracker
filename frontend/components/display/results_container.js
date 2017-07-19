import { connect } from 'react-redux';
import { fetchComments, fetchPosts } from '../../actions/result_actions';
import Results from './results';


const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: (username) => dispatch(fetchPosts(username)),
  fetchComments: (username) => dispatch(fetchComments(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)
