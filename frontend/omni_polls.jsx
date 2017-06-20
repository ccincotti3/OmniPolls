import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// TEST
const store = configureStore();
window.getState = store.getState;


// END TEST

document.addEventListener('DOMContentLoaded', () => {
  //TEST

  //END TEST

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
