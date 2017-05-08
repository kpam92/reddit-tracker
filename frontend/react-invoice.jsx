import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveItem, receiveItems } from './actions/item_actions';
import {changeTax } from './actions/amount_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore;
  // window.store = store;
  // window.receiveItem = receiveItem;
  // window.changeTax = changeTax;
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, root)
});
