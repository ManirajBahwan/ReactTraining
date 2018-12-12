import React from "react";
import { Link } from "react-router-dom";

function DepartmentList(props) {
  return (
    <section className="content">
      <h1>Departments</h1>
      <form action="">
        <div>
          <Link to={`${props.match.url}/create`}>
            <input type="button" value="Create" />
          </Link>

          <Link to={`${props.match.url}/update`}>
            <input type="button" value="Update" />
          </Link>
          <input type="button" value="Delete" />
        </div>
        <div>
          <table id="tab">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>100</td>
                <td>HR</td>
                <td>
                  <input name="dept" type="radio" />
                </td>
              </tr>
              <tr>
                <td>100</td>
                <td>Finance</td>
                <td>
                  <input name="dept" type="radio" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </section>
  );
}

export default DepartmentList;
