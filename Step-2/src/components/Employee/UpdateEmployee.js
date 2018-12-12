import React from "react";

function UpdateEmployee() {
  return (
    <section className="content">
      <h1>Update Employee</h1>
      <form action="">
        <div className="form-input">
          <label>Name:</label>
          <input type="text" />
        </div>

        <div className="form-input">
          <label>Email:</label>
          <input type="text" />
        </div>

        <div className="form-input">
          <label>Phone:</label>
          <input type="text" />
        </div>

        <div className="form-input">
          <label>Department:</label>
          <select>
            <option>HR</option>
          </select>
        </div>

        <div className="form-input">
          <input type="button" value="Update" />
          <input type="button" value="Reset" />
        </div>
      </form>
    </section>
  );
}

export default UpdateEmployee;
