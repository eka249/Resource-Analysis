import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TaskList from "./TaskList";
import ChartContainer from "./ChartContainer ";

class ManagerContainer extends React.Component {
  componentDidMount = () => {};

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            {/* <FilterEmpForm /> */}
            <TaskList />
          </Grid.Column>
          <Grid.Column>
            <ChartContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ManagerContainer;
