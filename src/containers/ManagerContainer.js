import React from "react";
import { Grid } from "semantic-ui-react";
import FilterEmpForm from "../components/manager/FilterEmpForm";
import ChartContainer from "../components/manager/ChartContainer ";
import NewTaskButton from "../components/manager/NewTaskButton";

class ManagerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      employees: [],
      allTasks: [],
      allMyTasks: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/employees/${this.state.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      // .then(data => console.log(data))
      .then(data =>
        this.setState({
          employees: data
        })
      );
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
        <h1>Hello {this.state.user.first_name} !</h1>
        <Grid divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <NewTaskButton
                user={this.props.user}
                handleFetchAllTasks={this.handleFetchAllTasks}
                employees={this.state.employees}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <FilterEmpForm
                user={this.props.user}
                unfilteredTaskList={this.state.allMyTasks}
                employees={this.state.employees}
                handleFetchAllTasks={this.handleFetchAllTasks}
              />
            </Grid.Column>
            <Grid.Column>
              <ChartContainer
                user={this.props.user}
                employees={this.state.employees}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ManagerContainer;
