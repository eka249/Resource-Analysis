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
      allMyTasks: []
    };
  }
  fetchMyTasks = () => {
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
        this.setState({
          allMyTasks: data.filter(
            removed => removed.emp_id !== this.props.user.id
          ),
          allTasks: data
        })
      )

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        employee page
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <FilterEmpForm
                user={this.props.user}
                unfilteredTaskList={this.state.allMyTasks}
                fetchMyTasks={this.fetchMyTasks}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default EmpContainer;
