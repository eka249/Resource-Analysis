import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  Redirect,
  withRouter
} from "react-router-dom";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    user: ""
  };

  handleChange = e => {
    let inputVal = e.target.name;
    this.setState({ ...this.state, [inputVal]: e.target.value });
  };

  handleSignIn = e => {
    e.preventDefault();
    console.log("initiated authentication request");
    fetch("http://localhost:3000/login", {
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
      .then(
        data => this.setState({ user: data.user }),
        () => {
          this.props.history.push(`/${this.state.user.role}`);
        }
      ),
      // .then(data => {
      //   this.props.getLoggedIn(data);
      // })
      () => {
        this.props.getLoggedIn(this.state.user);
      };
  };

  // .then(json => console.log(json.user.role))
  // .then(
  //   // json.user.role === "admin"?
  //   history.push("/admin")
  // );
  // .then(json => console.log(json))
  // .then(json => {
  //   // if (json.jwt) {
  //   localStorage.setItem("token", json.jwt);
  // }
  // return json;
  // this.props.history.push("/managerhome")
  // })

  //   : console.log(json.user.role)

  // : this.props.history.push("/manager");

  // .then(resp => this.setState({ user: resp.user }))
  // .then(json => this.props.history.push(`/${json.user.role}`))
  // .then(() => this.props.history.push("/admin"));
  // .then(json => console.log(json.user.role));
  // .then(console.log("end of handle sign in"));

  render() {
    console.log("Sign-in", this.state.user);
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

export default withRouter(SignIn);
