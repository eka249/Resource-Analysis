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

  handleEditTask = task => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        notes: task.notes
      })
    });
  };

  handleCompleteTask = task => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        complete: 1
      })
    });
    // console.log("all tasks state", this.state.allTasks);
    let filtered = this.state.allTasks.filter(
      removed => removed.id !== task.id
    );
    this.setState({
      allTasks: [...filtered]
    });
    console.log(this.state);
  };

  render() {
    console.log(this.state.allTasks);

    // if (this.state.allTasks !== []) {
    //   const taskList = this.state.allTasks.map((task, index) => {
    //     // if (task.manager_id == current_user.id) {
    //     return (
    //       <div>
    //         <TaskDetails
    //           key={index}
    //           task={task}
    //           handleCompleteTask={this.handleCompleteTask}
    //           handleEditTask={this.handleEditTask}
    //         />
    //       </div>
    //     );
    //     }

    return (
      <div>
        <h3>Your list of employees and their tasks</h3>
        {/* {taskList} */}
      </div>
    );
  }
}

export default TaskList;
