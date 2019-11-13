import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";
import AddNotesToTask from "../../containers/AddNotesToTask";

class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({
      show: !this.state.show,
      logged_in: true
    });
  };
  handleEditTask = (task, notes) => {
    fetch(`http://localhost:3000/tasks/${task}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        notes: notes
      })
    });
  };

  handleCompleteTask = task => {
    fetch(`http://localhost:3000/tasks/${task}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        completed: 1
      })
    });
  };

  render() {
    // console.log(this.props);
    return (
      <List celled>
        <List.Item>
          <List.Header>{this.props.myTask.description}</List.Header>
          <List.Description>
            Assigned to:
            {this.props.myTask.emp_id}
          </List.Description>
          <List.Description>
            Client:
            {this.props.myTask.client}
          </List.Description>

          <List.Content floated="right">
            <Button onClick={this.showModal}>Edit</Button>
          </List.Content>
          <List.Content floated="right">
            <Button
              onClick={() => this.handleCompleteTask(this.props.myTask.id)}
            >
              Mark as Complete
            </Button>
          </List.Content>
          <List.Content>
            {this.state.show ? (
              <AddNotesToTask
                myTask={this.props.myTask}
                logged_in={this.state.logged_in}
                user={this.props.user}
                showModal={this.showModal}
                handleEditTask={this.handleEditTask}
              />
            ) : null}
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default TaskDetails;
