import React, { Component } from "react";
import { Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TaskList from "./../../containers/TaskList";
import TaskDetails from "./TaskDetails";

class FilterEmpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTask: "",
      searchEmp: "",
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
                handleFetchAllTasks={this.props.handleFetchAllTasks}
                employees={this.props.employees}
              />
            </div>
          );
        });
      } else {
        let filteredList = this.props.unfilteredTaskList.filter(task => {
          let searched = this.state.searchTask;
          let titles = task.title
            .split(" ")
            .filter(word => word.toLowerCase().match(searched));
          let clients = task.client
            .split(" ")
            .filter(word => word.toLowerCase().match(searched));
          let descWords = task.description
            .split(" ")
            .filter(word => word.toLowerCase().match(searched));
          return (
            titles.length > 0 || descWords.length > 0 || clients.length > 0
          );
        });
        if (filteredList.length > 0) {
          return filteredList.map((task, index) => {
            return (
              <div>
                <TaskDetails
                  key={index}
                  myTask={task}
                  employees={this.props.employees}
                  handleFetchAllTasks={this.props.handleFetchAllTasks}
                />
              </div>
            );
          });
        } else {
          return null;
        }
      }
    }
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Input
            label="Search Task, Description, or Client"
            type="text"
            placeholder="Keywords"
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
