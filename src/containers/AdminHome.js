import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";
import UserList from "../components/admin/UserList";
import AddNewUser from "../components/admin/addNewUser";

class AdminHome extends Component {
  state = {
    allEmps: null
  };

  render() {
    let empList = this.props.employees.map((emp, index) => {
      return <UserList key={index} emp={emp} />;
    });

    return (
      <div>
        <AddNewUser />
        {empList}
      </div>
    );
  }
}
export default AdminHome;
