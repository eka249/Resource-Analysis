import React, { Component } from "react";
import TaskDetails from "../components/manager/TaskDetails";
import FilterEmpForm from "../components/manager/FilterEmpForm";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allMyTasks: this.props.allMyTasks,
      user: this.props.user
    };
  }

  // componentDidMount() {
  // fetch("http://localhost:3000/tasks", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     Authorization: `Bearer ${localStorage.token}`
  //   }
  // })
  //   .then(resp => resp.json())
  //   // .then(data =>
  //   //   console.log(
  //   //     data.filter(
  //   //       removed =>
  //   //         removed.user_id !== this.props.user.id ||
  //   //         removed.emp_id !== this.props.user.id
  //   //     )
  //   //   )
  //   // )
  //   .then(data =>
  //     this.setState({
  //       allTasks: data.filter(
  //         removed =>
  //           removed.user_id == this.props.user.id ||
  //           removed.emp_id == this.props.user.id
  //       )
  //     })
  //   )
  //   // .then(resp =>
  //   //   this.setState({ allTasks: resp }, () =>
  //   //     console.log(this.state.allTasks)
  //   //   )
  //   // )
  //   .catch(err => console.log(err));
  // }

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

  // console.log("all tasks state", this.state.allTasks);
  // let filtered = this.state.allTasks.filter(
  //   removed =>
  //     removed.user_id !== this.props.user.id ||
  //     removed.emp_id !== this.props.user.id
  // );
  // this.setState({
  //   allTasks: [...filtered]
  // });

  render() {
    // if (this.state.allTasks !== []) {
    return (
      <div>
        {this.state.allMyTasks.map((task, index) => {
          // if (task.manager_id == current_user.id) {
          return (
            <div>
              <TaskDetails
                key={index}
                myTask={task}
                handleCompleteTask={this.handleCompleteTask}
                handleEditTask={this.handleEditTask}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default TaskList;
