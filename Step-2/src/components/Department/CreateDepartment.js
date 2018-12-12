import React from "react";

function CreateDepartment() {
  return (
    <section className="content">
      <h1>Add Department</h1>
      <form action="">
        <div className="form-input">
          <label>Name:</label>
          <input type="text" />
        </div>

        <div className="form-input">
          <input type="button" value="Add" />
          <input type="button" value="Reset" />
        </div>
      </form>
    </section>
  );
}

export default CreateDepartment;
