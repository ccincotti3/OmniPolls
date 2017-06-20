import React from 'react';
import ReactDOM from 'react-dom';
// TEST



// END TEST

document.addEventListener('DOMContentLoaded', () => {
  //TEST
  window.signUp = APIUtil.signUp;
  window.logIn = APIUtil.logIn;
  window.logOut = APIUtil.logOut;
  //END TEST
  const root = document.getElementById('root');
  ReactDOM.render(<h1>OmniPolls</h1>, root);
});
