import React, { Component } from "react";
import { Form, Header, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class FilterEmpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        searchemp: "",
        searchtask: ""
      }
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
      <Form>
        <Form.Input
          label="Search Employees"
          type="text"
          placeholder="Name"
          id="searchemp"
          onChange={this.handleChange}
        />
        <Form.Input
          label="Search Tasks"
          type="text"
          placeholder="Task keywork"
          name="searchtasks"
          id="searchtasks"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default FilterEmpForm;
