import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute(props) {
  const { isLoggedIn } = props;

  if (!isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { from: props.location }
        }}
      />
    );
  }

  return <Route {...props} />;
}

PrivateRoute.defaultProps = {
  isLoggedIn: true
};

export default PrivateRoute;

/*
//Below code copied from: https://reacttraining.com/react-router/web/example/auth-workflow

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
*/
