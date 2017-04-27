import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore;
  window.store = store;
  const root = document.getElementById('content');
  ReactDOM.render(<h1>this is react</h1>, root)
})
