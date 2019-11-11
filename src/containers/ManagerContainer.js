import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TaskList from "./TaskList";
import ChartContainer from "../components/manager/ChartContainer ";

class ManagerContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      user: this.props.user
    };
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.user.first_name} !</h1>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              {/* <NewTaskButton /> */}
              {/* <FilterEmpForm /> */}
              <TaskList user={this.props.user} />
            </Grid.Column>
            <Grid.Column>{/* <ChartContainer /> */}</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default ManagerContainer;
