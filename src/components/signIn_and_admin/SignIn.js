import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Header, Button, Input } from "semantic-ui-react";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    user_id: "",
    role: ""
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
      .then(json => {
        if (json.jwt) {
          localStorage.setItem("token", json.jwt);
          this.props.getLoggedIn(json);
          this.setState({ role: json.user.role });
        }
      })
      .then(() => this.props.history.push(`/${this.state.role}`));
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />

        <Form>
          <Form.Group>
            <Form.Field
              name="email"
              label="Email Address"
              id="email"
              control={Input}
              fluid
              placeholder="Your Email"
              onChange={this.handleChange}
              width={6}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              label="Password"
              name="password"
              id="password"
              control={Input}
              fluid
              type="password"
              placeholder="Your Password"
              onChange={this.handleChange}
              width={4}
            ></Form.Field>
          </Form.Group>
        </Form>
        <Button onClick={e => this.handleSubmit(e)}>Submit</Button>
      </div>
    );
  }
}

export default SignIn;
