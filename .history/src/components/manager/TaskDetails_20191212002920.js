import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";
import AddNotesToTask from "../../containers/AddNotesToTask";

class TaskDetails extends Component {
  constructor(props) {
    super(props);
  }

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
    }).then(this.props.handleFetchAllTasks);
  };

  render() {
    // console.log(this.props);
    // let assignment = this.props.employees.filter(
    //   emp => emp.id === this.props.myTask.emp_id
    // );
    return (
      <List celled>
        <List.Item>
          <List.Header>Task: {this.props.myTask.title}</List.Header>
          <List.Description>
            Description:
            {this.props.myTask.description}
          </List.Description>
          {/* <List.Description>
            Assigned to:
            {this.props.employees.first_name}
            {this.props.employees.last_name}
          </List.Description> */}
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
              handleFetchAllTasks={this.props.handleFetchAllTasks}
            />
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default TaskDetails;
