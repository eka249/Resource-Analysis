import React, { Component } from "react";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class EditTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        // task: this.props.task,
        notes: this.props.notes,
        comp_date: this.props.comp_date,
        complete: 0
      }
    };
  }
  handleChange = e => {
    let fieldName = e.target.id;
    this.setState({
      fields: { ...this.state.fields, [fieldName]: e.target.value }
    });
  };

  handleSubmit = () => {
    this.setState(
      {
        fields: { ...this.state.fields, complete: 1 }
      },
      this.props.handleCompleteTask(this.props.task, this.state),
      this.props.showModal
    );
    // ,
    //   () => this.props.handleCompleteTask(this.props.task, this.state);
    // ,
    // () => this.props.showModal;
  };
  render() {
    return (
      <Modal
        // as={Form}
        // onSubmit={e => this.handleSignUp(e)}
        open={true}
        size="small"
        // closeIcon={this.props.showModal}
        className="c-modal"
      >
        <Header content="Task Notes" as="h2"></Header>
        <Modal.Actions>
          <Button
            onClick={this.props.showModal}
            color="black"
            icon="x"
            size="tiny"
          />
        </Modal.Actions>
        <Modal.Content>
          <Form.Input
            label="Notes"
            type="text"
            placeholder="New Note(s)"
            id="notes"
            onChange={this.handleChange}
          >
            {this.state.notes}
          </Form.Input>
          <Form.Input
            label="Date Completed"
            type="text"
            placeholder="Enter Date Completed YYYY-MM-DD"
            id="comp_date"
            onChange={this.handleChange}
          >
            {this.state.comp_date}
          </Form.Input>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            content="Save"
            onClick={
              (() => this.props.handleCompleteTask(this.props.task, this.state),
              () => this.props.showModal)
            }
          />
        </Modal.Actions>
        <Modal.Actions>
          <Button onClick={this.handleSubmit}>Save and Complete</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default EditTask;
