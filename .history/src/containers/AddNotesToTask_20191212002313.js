import React, { Component } from "react";
import {
  Modal,
  Form,
  Header,
  Button,
  Input,
  Select,
  TextArea
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
class AddNotesToTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.myTask,
      notes: this.props.myTask.notes,
      title: this.props.myTask.title,
      emp_id: this.props.myTask.emp_id,
      client: this.props.myTask.client,
      // assigned_date: this.props.myTask.assigned_date,
      // completed_date: this.props.myTask.completed_date,
      description: this.props.myTask.description,
      completed: this.props.myTask.completed,
      modalOpen: false
    };
  }

  showModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  handleChange = e => {
    let fieldName = e.target.id;
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  employeeOptions = () => {
    let options = [
      { key: "Matt", text: "Matt", value: "Matt" },
      { key: "Jared", text: "Jared", value: "Jared" },
      { key: "Joseph", text: "Joseph", value: "Joseph" },
      { key: "Brittan", text: "Brittan", value: "Brittan" },
      { key: "Katana", text: "JKatana", value: "Katana" 
     
    ];
    return options;
  };

  handleFrontEndSubmit = () => {
    this.handleSaveChange();
    this.showModal();
  };

  handleSaveChange = () => {
    fetch(`http://localhost:3000/tasks/${this.state.task.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        notes: this.state.notes,
        title: this.state.title,
        emp_id: this.state.emp_id,
        client: this.state.client,
        // start_date: this.state.assigned_date,
        // end_date: this.state.completed_date,
        description: this.state.description,
        completed: this.state.completed
      })
    }).then(this.props.handleFetchAllTasks);
  };

  render() {
    return (
      <Modal
        size="large"
        trigger={<Button onClick={this.showModal}>Edit</Button>}
        open={this.state.modalOpen}
        onClose={this.showModal}
      >
        <Header>Add/Edit Notes</Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                fluid
                control={TextArea}
                label="Task"
                name="title"
                id="title"
                onChange={this.handleChange}
                value={this.state.title}
              ></Form.Field>
              <Form.Field
                control={TextArea}
                fluid
                label="Description"
                name="description"
                id="description"
                onChange={this.handleChange}
                value={this.state.description}
              ></Form.Field>
              <Form.Field
                control={Input}
                fluid
                label="Client"
                name="client"
                id="client"
                onChange={this.handleChange}
                value={this.state.client}
              ></Form.Field>

              <Form.Field
                fluid
                label="Assign To"
                control={Select}
                name="emp_id"
                options={this.employeeOptions()}
                id="emp_id"
                onChange={this.handleChange}
                value={this.state.emp_id}
              ></Form.Field>
            </Form.Group>
            <Header>Select Start Date</Header>
            {/* 
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
              name="notes"
              onChange={this.handleChange}
              value={this.state.notes}
            ></Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleFrontEndSubmit}>Save Edits</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default AddNotesToTask;
