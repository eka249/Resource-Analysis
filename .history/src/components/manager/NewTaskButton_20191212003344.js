import React, { Component } from "react";
import { render } from "react-dom";
import {
  Modal,
  Form,
  Header,
  Button,
  Select,
  Input,
  TextArea
} from "semantic-ui-react";
import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const employees = [];
class NewTaskButton extends Component {
  state = {
    modalOpen: false,
    user: this.props.user,
    title: "",
    assigned_to: "",
    client: "",
    // assigned_date: moment().toDate(),
    // completed_date: moment().toDate(),
    description: "",
    notes: ""
  };

  showModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  handleFrontEndSubmit = () => {
    this.handleAddTask();
    this.showModal();
  };

  handleChange = e => {
    let fieldName = e.target.id;
    this.setState({
      ...this.state.fields,
      [fieldName]: e.target.value
    });
  };

  handleAddTask = () => {
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        title: this.state.title,
        emp_id: 7,
        //hard coded employee currently
        client: this.state.client,
        // start_date: this.state.assigned_date,
        // end_date: this.state.completed_date,
        description: this.state.description,
        notes: this.state.notes,
        comp_date: null,
        completed: 0
      })
    }).then(this.props.handleFetchAllTasks);
  };

  employeeOptions = () => {
    let options = [
      { key: "Matt", text: "Matt", value: "Matt" },
      { key: "Jared", text: "Jared", value: "Jared" },
      { key: "Joseph", text: "Joseph", value: "Joseph" },
      { key: "Brittan", text: "Brittan", value: "Brittan" },
      { key: "Katana", text: "JKatana", value: "Katana" }
    ];
    return options;
  };

  // let optionsFinal = this.props.employees.map(emp =>
  //   options.unshift({
  //     key: ${emp.first_name},
  //     text: ${emp.first_name},
  //     value: ${emp.first_name}

  // })

  // console.log(optionsFinal);

  render() {
    return (
      <Modal
        size="large"
        trigger={<Button onClick={this.showModal}>Create New Task</Button>}
        open={this.state.modalOpen}
        onClose={this.showModal}
      >
        <Header>New Task</Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                fluid
                control={Input}
                label="New Task"
                name="title"
                placeholder="Task Title"
                id="title"
                onChange={this.handleChange}
              />
              <Form.Field
                control={Input}
                fluid
                label="Description"
                name="description"
                placeholder="Description"
                id="description"
                onChange={this.handleChange}
              />
              <Form.Field
                control={Input}
                fluid
                label="Client"
                name="client"
                placeholder="Client Name"
                id="client"
                onChange={this.handleChange}
              />

              <Form.Field
                fluid
                label="Assign To"
                control={Select}
                name="assigned_to"
                options={this.employeeOptions()}
                placeholder="Employee name"
                id="assigned_to"
                onChange={this.handleChange}
              />
            </Form.Group>
            {/* <Header>Select Start Date</Header>

            <DatePicker
              name="assigned_date"
              id="assigned_date"
              selected={this.state.assigned_date}
              onChange={this.handleChangeDate}
            />
            <Header>Select End Date</Header>

            <DatePicker
              id="completed_date"
              name="completed_date"
              selected={this.state.completed_date}
              onChange={this.handleChangeDate}
            /> */}
            <Form.Field
              control={TextArea}
              label="Notes"
              id="notes"
              placeholder="Notes (optional)"
              name="notes"
              onChange={this.handleChange}
            />
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button primary onClick={this.handleFrontEndSubmit}>
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default NewTaskButton;
