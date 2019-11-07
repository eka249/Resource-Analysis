import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";
import AddNotesToTask from "../../containers/AddNotesToTask";

class TaskDetails extends Component {
  // console.log("current task", props.task);
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({
      show: !this.state.show
      // ,logged_in: true
    });
  };

  render() {
    return (
      <List celled>
        <List.Item>
          <List.Content>
            <List.Header>{this.props.task.description}</List.Header>
            {/* {this.props.task.user_id} */}
          </List.Content>
          <List.Content floated="right">
            <Button onClick={this.showModal}>Add notes</Button>
          </List.Content>
          <List.Content floated="right">
            <Button
              onClick={() => this.props.handleCompleteTask(this.props.task)}
            >
              Mark as Complete
            </Button>
            {this.state.show ? (
              <AddNotesToTask
                task={this.props.task}
                // logged_in={this.state.logged_in}
                // user={this.state.user}
                // getLoggedIn={this.getLoggedIn}
                showModal={this.showModal}
              />
            ) : null}
          </List.Content>
        </List.Item>
      </List>
    );
  }
}

export default TaskDetails;
