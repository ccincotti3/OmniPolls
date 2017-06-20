import React from 'react';
import { Route, Link } from 'react-router-dom'
import SessionFormContainer from './session_form_container'
import { AuthRoute } from '../util/route_util'
import GreetingContainer from './greeting_container'

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
