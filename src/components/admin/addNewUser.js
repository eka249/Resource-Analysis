import React, { Component } from "react";
import { Form, Button, Modal, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { userPostFetch } from "../../actions/fetchActions";

class AddNewUser extends Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    unit: "",
    role: "",
    password: "123456789a!"
  };
  handleChange = e => {
    let inputVal = e.target.name;
    this.setState({ ...this.state, [inputVal]: e.target.value });
  };
  submitNewUser = e => {
    e.preventDefault();
    console.log("started post new user from front end");
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        unit: this.state.unit,
        role: this.state.role
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("after sign up form", data);
      });
  };

  render() {
    return (
      <div>
        <Modal as={Form}>
          <Header content="Or Sign Up!" as="h3"></Header>
          <Modal.Content>
            <Form.Input
              label="First Name"
              type="text"
              name="newName"
              id="newName"
              name="first_name"
              component="input"
              placeholder="New User Email"
              onChange={this.handleChange}
            />
            <Form.Input
              label=" New username "
              // required
              type="text"
              placeholder="Username"
              name="newUsername"
              id="newUsername"
              // value={this.state.newUser.newUsername}
              onChange={this.handleChange}
            />
            <Form.Input
              label=" New password "
              // required
              type="password"
              placeholder="Password"
              name="newPassword"
              id="newPassword"
              // value={this.state.newUser.newPassword}
              onChange={this.handleChange}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              type="submit"
              onClick={this.submitNewUser}
              color="green"
              icon="pencil"
              content="Create New User"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
    // <form onSubmit={this.submitNewUser}>
    //   <input
    //     name="email"
    //     component="input"
    //     type="text"
    //     placeholder="New User Email"
    //     onChange={this.handleChange}
    //   ></input>
    //   <input
    //     name="first_name"
    //     component="input"
    //     type="test"
    //     placeholder="New User First name"
    //     onChange={this.handleChange}
    //   ></input>
    //   <input
    //     name="last_name"
    //     component="input"
    //     type="test"
    //     placeholder="New User Last name"
    //     onChange={this.handleChange}
    //   ></input>
    //   <input
    //     name="unit"
    //     component="input"
    //     type="text"
    //     placeholder="New User Unit"
    //     onChange={this.handleChange}
    //   ></input>
    //   <input
    //     name="role"
    //     component="input"
    //     type="text"
    //     placeholder="New User Role"
    //     onChange={this.handleChange}
    //   ></input>

    //   <button type="submit">Submit</button>
    // </form>
  }
}

// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

// export default connect(null, mapDispatchToProps
// )(AddNewUser);
export default AddNewUser;
