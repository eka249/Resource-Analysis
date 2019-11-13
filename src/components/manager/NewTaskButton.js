import React, { Component } from "react";
import { render } from "react-dom";
import {
  Modal,
  Form,
  Header,
  Button,
  Select,
  Dropdown,
  Image,
  Icon,
  Container,
  Divider,
  Message
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
    assigned_date: "",
    completed_date: "",
    description: "",
    notes: "",
    date: moment().toDate()
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = e => {
    let fieldName = e.target.id;
    this.setState({
      ...this.state.fields,
      [fieldName]: e.target.value
    });
  };

  handleAddTask = () => {
    console.log("reached handle add task");
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
        emp_id: 1,
        client: this.state.client,
        start_date: this.state.assigned_date,
        end_date: this.state.completed_date,
        description: this.state.description,
        notes: this.state.notes,
        comp_date: null,
        completed: 0
      })
    })
      .then(this.handleClose())
      .then(this.props.fetchTasks);
  };

  employeeOptions = () => {
    let options = [
      { key: "Jared", text: "Jared", value: "Jared" },
      { key: "Joseph", text: "Joseph", value: "Joseph" },
      { key: "Brittan", text: "Brittan", value: "Brittan" },
      { key: "Katana", text: "JKatana", value: "Katana" },
      { key: "Matt", text: "Matt", value: "Matt" }
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
        trigger={<Button onClick={this.handleOpen}>Create New Task</Button>}
      >
        <Modal.Header>New Task</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="New Task"
                name="title"
                placeholder="Task Title"
                id="title"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Description"
                name="description"
                placeholder="Description"
                id="description"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Client"
                name="client"
                placeholder="Client Name"
                id="client"
                onChange={this.handleChange}
              />

              <Form.Input
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
            <Header>Select Start Date</Header>

            <DatePicker
              name="assigned_date"
              id="assigned_date"
              selected={this.state.date}
              onChange={this.handleChangeDate}
            />
            <Header>Select End Date</Header>

            <DatePicker
              id="completed_date"
              name="completed_date"
              selected={this.state.date}
              onChange={this.handleChangeDate}
            />
            <Form.TextArea
              label="Notes"
              id="notes"
              placeholder="Notes (optional)"
              name="notes"
              onChange={this.handleChange}
            />
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button primary onClick={this.handleAddTask}>
            Submit
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
//       <Modal as={Form} open={true} size="small" className="c-modal">
//         <Header content="Task Notes" as="h2"></Header>
//         <Modal.Content>
//           <Form.Input
//             label="notes"
//             type="text"
//             name="notes"
//             placeholder="New Note(s)"
//             id="username"
//             onChange={this.handleChange}
//           >
//             {this.state.notes}
//           </Form.Input>
//         </Modal.Content>
//         <Modal.Actions>
//           <Button
//             color="green"
//             content="Save"
//             onClick={
//               (this.props.handleEditTask(this.props.task.id, this.state.notes),
//               this.props.showModal)
//             }
//           />
//         </Modal.Actions>
//       </Modal>
//     );
//   }
// }
export default NewTaskButton;
