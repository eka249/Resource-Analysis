import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
// import { applyMiddleware } from "redux";
import { connect } from "react-redux";
import { userPostFetch } from "../../actions/fetchActions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    let inputVal = e.target.name;
    this.setState({ ...this.state, [inputVal]: e.target.value });
  };

  handleSignIn = e => {
    e.preventDefault();
    fetch("http://localhost:3000/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(resp => resp.json())
      .then(json => {
        if (json.jwt) {
          localStorage.setItem("token", json.jwt);
          //instead of sending this loginUser function as props, dispatch the function to action..later to be sent to formReducer
          // dispatch(loginUser(json.user));
        }
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSignIn}>
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
          placeholder="Password"
          onChange={this.handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// });

export default // connect(
//   null,
//   mapDispatchToProps
// )(
SignIn;
// );
