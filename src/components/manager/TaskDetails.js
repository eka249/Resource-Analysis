import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";
import AddNotesToTask from "../../containers/AddNotesToTask";

class TaskDetails extends Component {
  constructor(props) {
    super(props);
  }

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
    }).then(this.props.handleFetchTasks);
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
    }).then(this.props.handleFetchTasks);
  };

  render() {
    // console.log(this.props);
    let assignment = this.props.employees.filter(
      emp => emp.id === this.props.myTask.emp_id
    );
    return (
      <List celled>
        <List.Item>
          <List.Header>{this.props.myTask.description}</List.Header>
          <List.Description>
            Assigned to:
            {assignment.first_name}
          </List.Description>
          <List.Description>
            Client:
            {this.props.myTask.client}
          </List.Description>
          <List.Content floated="right">
            <Button
              onClick={() => this.handleCompleteTask(this.props.myTask.id)}
            >
              Mark as Complete
            </Button>
          </List.Content>
          <List.Content>
            <AddNotesToTask
              myTask={this.props.myTask}
              user={this.props.user}
              handleEditTask={this.handleEditTask}
            />
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default TaskDetails;
