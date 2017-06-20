import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import SessionFormContainer from './session_form_container'
import { AuthRoute } from '../util/route_util'
import GreetingContainer from './splash_index/greeting_container'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
