import React, { Component } from "react";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class AddNotesToTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: this.props.myTask.notes
    };
  }
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleChange = e => {
    let fieldName = e.target.id;
    this.setState({
      fields: { ...this.state.fields, [fieldName]: e.target.value }
    });
  };

  handleSaveChange = () => {
    this.props.handleEditTask(this.props.myTask.id, this.state.notes);
    this.handleClose();
  };

  render() {
    return (
      <Modal
        size="large"
        trigger={<Button onClick={this.handleOpen}>Edit Task</Button>}
      >
        <Modal.Header as="h2">Add/Edit Notes</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.TextArea
              label="notes"
              type="text"
              placeholder="New Note(s)"
              id="notes"
              onChange={this.handleChange}
            >
              {this.state.notes}
            </Form.TextArea>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" primary onClick={this.handleSaveChange}>
            Save Edits
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default AddNotesToTask;
