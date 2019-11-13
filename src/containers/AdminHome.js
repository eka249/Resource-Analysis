import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";
import UserDetails from "../components/admin/UserDetails";
import AddNewUser from "../components/admin/addNewUser";

class AdminHome extends Component {
  state = {
    show: false,
    employees: this.props.employees,
    user: this.props.user
  };

  showModal = () => {
    this.setState({
      show: !this.state.show,
      logged_in: true
    });
  };

  render() {
    return (
      <div>
        <Button animated="fade" onClick={this.showModal} floated="right">
          <Button.Content visible>New User</Button.Content>
          <Button.Content hidden>New User</Button.Content>
        </Button>
        <List>
          {this.state.employees.map(emp => {
            return (
              <List.Item emp={emp}>
                <List.Content>
                  <List.Header>{emp.first_name}</List.Header>
                  <List.Description>
                    whatever more attributes to put here
                  </List.Description>
                </List.Content>
              </List.Item>
            );
          })}
        </List>
        {this.state.show ? <AddNewUser user={this.user} /> : null}
      </div>
    );
  }
}
export default AdminHome;
