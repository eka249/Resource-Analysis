import React, { Component } from "react";
import TaskDetails from "../components/manager/TaskDetails";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/tasks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(resp => this.setState({ allTasks: resp }))
      .catch(err => console.log(err));
  }

  handleCompleteTask = task => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        complete: 1
      })
    });
  };

  render() {
    console.log(this.state.allTasks);
    if (this.state.allTasks !== []) {
      const taskList = this.state.allTasks.map((task, index) => {
        return (
          <TaskDetails
            key={index}
            task={task}
            handleCompleteTask={this.handleCompleteTask}
          />
        );
      });
      return <div>{taskList}</div>;
    }
  }
}

export default TaskList;
