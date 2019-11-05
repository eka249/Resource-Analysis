import React from "react";
import TaskDetails from "../components/manager/TaskDetails";

class TaskList extends React.Component {
  componentDidMount = () => {
    let generateTasks = fetch("http://localhost:3000/tasks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
  };

  render() {
    return <TaskDetails tasks={this.props.tasks} />;
  }
}

export default TaskList;
