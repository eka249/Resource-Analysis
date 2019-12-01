import React, { Component } from "react";
import { Form, Button, Modal, Select } from "semantic-ui-react";
import { connect } from "react-redux";
import { userPostFetch } from "../../actions/fetchActions";

class AddNewUser extends Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    unit: "",
    role: "",
    password: "123456789a!",
    modalOpen: false
  };
  handleChange = e => {
    let inputVal = e.target.id;
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
      .then(this.handleClose)
      .then(data => {
        console.log("after sign up form", data);
      });
  };
  showModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  handleFrontEndSubmit = () => {
    this.submitNewUser();
    this.showModal();
  };

  render() {
    const roleOptions = [
      { key: "manager", text: "Manager", value: "manager" },
      { key: "admin", text: "Admin", value: "admin" },
      { key: "employee", text: "Employee", value: "employee" }
    ];
    return (
      <div>
        <Modal
          size="large"
          trigger={
            <Button
              trigger={<Button onClick={this.showModal}>Add New User</Button>}
              open={this.state.modalOpen}
              onClose={this.showModal}
              animated="fade"
              floaded="right"
              color="green"
              content="Create New User"
            >
              <Button.Content visible>New User</Button.Content>
              <Button.Content hidden>New User</Button.Content>
            </Button>
          }
        >
          <Modal.Header as="h3">Enter New User Details</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Input
                label="Email "
                // required
                type="text"
                placeholder="Email"
                id="email"
                // value={this.state.newUser.newUsername}
                onChange={e => this.handleChange}
              />
              <Form.Input
                label="First Name"
                type="text"
                id="first_name"
                placeholder="New User First Name"
                onChange={e => this.handleChange}
              />

              <Form.Input
                label="Last Name"
                type="text"
                id="laset_name"
                placeholder="New User Last Name"
                onChange={e => this.handleChange}
              />
            </Form>
            <Form.Input
              label="Unit"
              type="text"
              id="unit"
              placeholder="New User Unit"
              onChange={e => this.handleChange}
            />
            <Form.Input
              label="Position"
              control={Select}
              options={roleOptions}
              id="role"
              placeholder="New User Position"
              onChange={e => this.handleChange}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleFrontEndSubmit}>Submit</Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default AddNewUser;
