import React from 'react';
import { createBrowserHistory } from 'history';
import { Switch, Router } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Logout from '../components/Logout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <div className="container">
          <Switch>
            <PublicRoute path="/" component={Login} exact={true} />
            <PublicRoute path="/register" component={Register} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/logout" component={Logout} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
