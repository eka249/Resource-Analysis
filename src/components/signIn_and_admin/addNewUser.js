import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { userPostFetch } from "../../actions/fetchActions";

class AddNewUser extends Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    unit: "",
    password: ""
  };
  handleChange = e => {
    let inputVal = e.target.name;
    this.setState({ ...this.state, [inputVal]: e.target.value });
  };
  submitNewUser = e => {
    e.preventDefault();
    console.log("started post new user from front end");
    fetch("http://localhost:3000/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        unit: this.state.unit
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("after sign up form", data);
      });
  };

  render() {
    return (
      <form onSubmit={this.submitNewUser}>
        <input
          name="email"
          component="input"
          type="text"
          placeholder="New User Email"
          onChange={this.handleChange}
        ></input>
        <input
          name="first_name"
          component="input"
          type="test"
          placeholder="New User First name"
          onChange={this.handleChange}
        ></input>
        <input
          name="last_name"
          component="input"
          type="test"
          placeholder="New User Last name"
          onChange={this.handleChange}
        ></input>
        <input
          name="unit"
          component="input"
          type="text"
          placeholder="New User Unit"
          onChange={this.handleChange}
        ></input>
        <input
          name="password"
          component="input"
          type="text"
          placeholder="New User Passwrod"
          onChange={this.handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

// export default connect(null, mapDispatchToProps
// )(AddNewUser);
export default AddNewUser;
