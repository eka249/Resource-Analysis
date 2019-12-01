import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TaskList from "./TaskList";
import FilterEmpForm from "../components/manager/FilterEmpForm";

class EmpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      allTasks: [],
      allMyTasks: [],
      employees: this.props.user
    };
    this.handleFetchAllTasks();
  }
  handleFetchAllTasks = () => {
    fetch("http://localhost:3000/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      // .then(data => console.log("just the response", data))
      .then(data =>
        //sets state with only tasks that are theirs or their employee's
        this.setState({
          allMyTasks: data.filter(
            removed =>
              (removed.user_id !== this.props.user.id ||
                removed.emp_id !== this.props.user.id) &&
              removed.completed == false
          )
        })
      )

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Hello {this.state.user.first_name}!</h2>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <FilterEmpForm
                user={this.props.user}
                unfilteredTaskList={this.state.allMyTasks}
                handleFetchAllTasks={this.handleFetchAllTasks}
                employees={this.state.employees}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default EmpContainer;
