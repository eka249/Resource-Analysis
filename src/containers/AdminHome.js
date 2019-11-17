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
        {this.props.employees.map((emp, index) => {
          return (
            <div>
              <UserList key={index} emp={emp} />
            </div>
          );
        })}
        <AddNewUser user={this.props.user} employees={this.props.employees} />
      </div>
    );
  }
}
export default AdminHome;
