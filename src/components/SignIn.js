import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    let inputVal = e.target.name;
    this.setState({ ...this.state, [inputVal]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          name="email"
          component="input"
          type="text"
          placeholder="Your Email"
          onChange={this.handleChange}
        ></input>
        <input
          name="password"
          component="input"
          type="password"
          placeholder="Your Password"
          onChange={this.handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignIn;
