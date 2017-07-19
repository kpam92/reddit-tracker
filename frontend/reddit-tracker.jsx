import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { changePosts, changeComments } from './actions/result_actions';
document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = configureStore();
  window.changePosts = changePosts;
  window.changeComments = changeComments;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root)
});
