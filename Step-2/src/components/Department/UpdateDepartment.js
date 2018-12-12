import React from "react";

function UpdateDepartment() {
  return (
    <section className="content">
      <h1>Update Department</h1>
      <form action="">
        <div className="form-input">
          <label>Name:</label>
          <input type="text" />
        </div>

        <div className="form-input">
          <input type="button" value="Update" />
          <input type="button" value="Reset" />
        </div>
      </form>
    </section>
  );
}

export default UpdateDepartment;
