import React, { Component } from "react";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class AddNotesToTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        notes: this.props.notes
      }
    };
  }
  handleChange = e => {
    let fieldName = e.target.id;
    this.setState({
      fields: { ...this.state.fields, [fieldName]: e.target.value }
    });
  };

  handleAddNotes = task => {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      // headers: {
      //   Authorization: `Bearer ${localStorage.token}`
      // },
      body: JSON.stringify({
        notes: this.state.notes
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log("after adding/editing notes", data);
        // this.setState(prevState => {
        //   return { signedUp: true };
        // });
      });
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
            id="username"
            onChange={this.handleChange}
          />
          {this.state.notes}
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            content="Save"
            // onClick={console.log("sign in hit")}
            onClick={
              // this.onSignIn
              this.handleAddNotes
            }
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
export default AddNotesToTask;
