import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TaskList from "./TaskList";

class EmpContainer extends React.Component {
  componentDidMount = () => {};

  render() {
    return (
      <div>
        manager page
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <TaskList />
            </Grid.Column>
            <Grid.Column>{/* <ChartContainer /> */}</Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default EmpContainer;
