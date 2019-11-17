import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    user_id: ""
  };
  handleChange = e => {
    let inputVal = e.target.name;
    this.setState({ ...this.state, [inputVal]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    //routes to auth#create on backend to recieve token
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      // .then(data => console.log(data.user))
      .then(json => {
        if (json.jwt) {
          localStorage.setItem("token", json.jwt);
          // debugger
          this.props.getLoggedIn(json);
        }
      });
    //add more actions depending on user
  };
  //     .then(data => {
  //       this.props.history.push(`/${data.user.role}`);
  //     });
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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

export default SignIn;

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
