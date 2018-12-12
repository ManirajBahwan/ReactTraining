import React from "react";
import { Switch, Route } from "react-router-dom";

import EmployeeList from "./EmployeeList";
import CreateEmployee from "./CreateEmployee";
import UpdateEmployee from "./UpdateEmployee";
import PrivateRoute from "../Util/PrivateRoute";

function Employee(props) {
  return (
    <Switch>
      <PrivateRoute
        exact
        path={`${props.match.path}/`}
        component={EmployeeList}
      />

      <PrivateRoute
        path={`${props.match.path}/create`}
        component={CreateEmployee}
      />

      <PrivateRoute
        path={`${props.match.path}/update`}
        component={UpdateEmployee}
      />
    </Switch>
  );
}

export default Employee;
