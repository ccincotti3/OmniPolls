import React from 'react';
import ReactDOM from 'react-dom';
// TEST

import * as APIUtil from './util/session_api_util'

// END TEST

document.addEventListener('DOMContentLoaded', () => {
  //TEST
  window.signIn = APIUtil.signIn;
  window.logIn = APIUtil.logIn;
  window.logOut = APIUtil.logOut;
  //END TEST
  const root = document.getElementById('root');
  ReactDOM.render(<h1>OmniPolls</h1>, root);
});
