import React, { Component } from "react";
import {
  Form,
  Button,
  Modal,
  Select,
  Dropdown,
  Input
} from "semantic-ui-react";

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
    this.setState({ [e.target.name]: e.target.value });
  };
  submitNewUser = () => {
    // e.preventDefault();
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
      .then(() => this.props.getUsers());
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
    return (
      <div>
        <Modal
          size="large"
          trigger={<Button onClick={this.showModal}>Add New User</Button>}
          open={this.state.modalOpen}
          onClose={this.showModal}
          animated="fade"
          floaded="right"
          color="green"
          content="Create New User"
        >
          } ><Modal.Header as="h3">Enter New User Details</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field
                control={Input}
                label="Email "
                // required
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                onChange={this.handleChange}
              />
              <Form.Field
                control={Input}
                label="First Name"
                type="text"
                id="first_name"
                name="first_name"
                placeholder="New User First Name"
                onChange={this.handleChange}
              />

              <Form.Field
                control={Input}
                label="Last Name"
                type="text"
                id="last_name"
                name="last_name"
                placeholder="New User Last Name"
                onChange={this.handleChange}
              />
            </Form>
            <Form.Field
              control={Input}
              label="Unit"
              type="text"
              id="unit"
              name="unit"
              placeholder="New User Unit"
              onChange={this.handleChange}
            />
            <Form.Group inline>
              <label>Position</label>
              <Form.Radio
                label="Admin"
                name="admin"
                value="admin"
                checked={this.state.role == "admin"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Manager"
                name="manager"
                checked={this.state.role === "manager"}
                onChange={this.handleChange}
              />
              <Form.Radio
                label="Employee"
                name="emp"
                checked={this.state.role === "emp"}
                onChange={this.handleChange}
              />
            </Form.Group>
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
