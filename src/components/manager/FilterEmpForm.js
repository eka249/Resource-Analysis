import React, { Component } from "react";
import { Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TaskList from "./../../containers/TaskList";
import TaskDetails from "./TaskDetails";

class FilterEmpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // searchEmp: "",
      searchTask: "",
      allCurrentTasks: this.props.unfilteredTaskList
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  filteredTasks = () => {
    if (this.props.unfilteredTaskList.length > 0) {
      if (this.state.searchTask === "") {
        return this.props.unfilteredTaskList.map((task, index) => {
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
        });
      } else {
        let filteredList = this.props.unfilteredTaskList.filter(task => {
          let searched = this.state.searchTask;
          // let employees
          let titles = task.title
            .split(" ")
            .filter(word => word.toLowerCase().match(searched));
          let descWords = task.description
            .split(" ")
            .filter(word => word.toLowerCase().match(searched));
          return titles.length > 0 || descWords.length > 0;
        });
        if (filteredList.length > 0) {
          return filteredList.map((task, index) => {
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
          });
        }
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Input
            label="Search Employees or Tasks"
            type="text"
            placeholder="Task keywork"
            id="searchTask"
            onChange={this.handleChange}
          />
        </Form>
        <div>{this.filteredTasks()}</div>
      </div>
    );
  }
}

export default FilterEmpForm;
