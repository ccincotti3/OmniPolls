import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import NewUserFormContainer from './session/new_user_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './splash_index/greeting_container';
import AuthRender from './session/auth_render_page';
import GroupListContainer from './groups/group_list_container';
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <AuthRoute path="/login" component={AuthRender} />
      <AuthRoute path="/signup" component={AuthRender} />
      <ProtectedRoute path="/polls" component={GroupListContainer} />
    </Switch>
  </div>
);

export default App;
