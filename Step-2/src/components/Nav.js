import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div>
        <NavLink activeClassName="activeNav" to="/department">
          Department
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="activeNav" to="/employee">
          Employee
        </NavLink>
      </div>
      <div>
        <NavLink activeClassName="activeNav" to="/logout">
          Logout
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
