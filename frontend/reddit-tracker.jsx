import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPosts, fetchComments } from './actions/result_actions';
document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.fetchPosts = fetchPosts;
  window.fetchComments = fetchComments;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root)
});
