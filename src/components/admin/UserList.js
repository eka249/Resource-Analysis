import React, { Component } from "react";
import { List } from "semantic-ui-react";

class UserList extends Component {
  render() {
    return (
      <List celled>
        <List.Item>
          <List.Content>
            <List.Header>
              {`${this.props.emp.first_name} ${this.props.emp.last_name}`}
            </List.Header>
            <List.Description>Unit: {this.props.emp.unit}</List.Description>
            {/* <List.Description>
                    Manager: {emp.unit}
                  </List.Description> */}
            {/* <Proxy button></Proxy> */}
          </List.Content>
        </List.Item>{" "}
      </List>
    );
  }
}
export default UserList;
