import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";
import UserList from "../components/admin/UserList";
import AddNewUser from "../components/admin/addNewUser";

class AdminHome extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <div>
        <AddNewUser user={this.props.user} />
        <List celled>
          {this.props.employees.map((emp, index) => {
            return <UserList key={index} emp={emp} />;
          })}
        </List>
      </div>
    );
  }
}
export default AdminHome;
