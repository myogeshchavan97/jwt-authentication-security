import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? <Redirect to="/profile" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth && state.auth.isAuthenticated
});

export default connect(mapStateToProps)(PublicRoute);
