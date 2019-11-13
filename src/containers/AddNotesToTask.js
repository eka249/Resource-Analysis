import React, { Component } from "react";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class AddNotesToTask extends Component {
  state = {
    notes: ""
  };
  constructor(props) {
    super(props);
    this.setState = {
      notes: this.props.myTask.notes
    };
  }
  handleChange = e => {
    let fieldName = e.target.id;
    this.setState({
      fields: { ...this.state.fields, [fieldName]: e.target.value }
    });
  };

  render() {
    return (
      <Modal as={Form} open={true} size="small" className="c-modal">
        <Header content="Task Notes" as="h2"></Header>
        <Modal.Content>
          <Form.Input
            label="notes"
            type="text"
            name="notes"
            placeholder="New Note(s)"
            id="username"
            onChange={this.handleChange}
          >
            {this.state.notes}
          </Form.Input>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            content="Save"
            onClick={
              (this.props.handleEditTask(
                this.props.myTask.id,
                this.state.notes
              ),
              this.props.showModal)
            }
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
export default AddNotesToTask;
