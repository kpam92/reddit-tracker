import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveItem, receiveItems } from './actions/item_actions';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore;
  window.store = store;
  window.receiveItem = receiveItem;
  window.receiveItems = receiveItems;
  const root = document.getElementById('content');
  ReactDOM.render(<App/>, root)
});
