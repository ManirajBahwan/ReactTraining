import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import Employee from "./Employee/Employee";
import Department from "./Department/Department";
import PrivateRoute from "./Util/PrivateRoute";

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/logout" component={Logout} />
      <PrivateRoute path="/employee" component={Employee} />
      <PrivateRoute path="/department" component={Department} />
      <Route
        path="*"
        render={props => {
          console.log(props);

          return (
            <section className="content">
              <br />
              <br />
              <h2 style={{ color: "red" }}>
                {props.match.url}: 404 - Page not found!
              </h2>
            </section>
          );
        }}
      />
    </Switch>
  );
}

export default Content;
