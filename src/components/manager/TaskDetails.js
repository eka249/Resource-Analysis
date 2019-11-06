import React from "react";
import { Button, List } from "semantic-ui-react";

const TaskDetails = props => {
  return (
    <List celled>
      {this.props.task}
      <List.Item>
        <List.Content>
          <List.Header>{this.props.task.description}</List.Header>
          {this.props.task.assigned_to}
        </List.Content>
        <List.Content floated="right">
          <Button>Add notes</Button>
        </List.Content>
        <List.Content floated="right">
          <Button onClick={this.props.handleCompleteTask(this.props.task)}>
            Mark as Complete
          </Button>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default TaskDetails;
