import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Splash from './pages/Splash/Splash.js';
import { useAuth } from "./context/auth";


const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useAuth();

  return(
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Route path="/" component={Splash} exact />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;