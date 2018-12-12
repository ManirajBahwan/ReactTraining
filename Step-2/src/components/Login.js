import React from "react";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/home" />;
    }

    return (
      <section className="content">
        <h1>Login</h1>
        <form action="">
          <div className="form-input">
            <label>Username:</label> <input type="text" />
          </div>

          <div className="form-input">
            <label>Password:</label> <input type="password" />
          </div>

          <div className="form-input">
            <input type="button" value="Login" onClick={this.submitForm} />
            <input type="button" value="Reset" />
          </div>
        </form>
      </section>
    );
  }
}

export default Login;
