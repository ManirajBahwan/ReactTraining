import React from "react";
import { Switch, Route } from "react-router-dom";

import DepartmentList from "./DepartmentList";
import CreateDepartment from "./CreateDepartment";
import UpdateDepartment from "./UpdateDepartment";
import PrivateRoute from "../Util/PrivateRoute";

function Department(props) {
  return (
    <Switch>
      <PrivateRoute
        exact
        path={`${props.match.path}/`}
        component={DepartmentList}
      />

      <PrivateRoute
        path={`${props.match.path}/create`}
        component={CreateDepartment}
      />

      <PrivateRoute
        path={`${props.match.path}/update`}
        component={UpdateDepartment}
      />
    </Switch>
  );
}

export default Department;
