import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";
import UserList from "../components/admin/UserList";
import AddNewUser from "../components/admin/addNewUser";

class AdminHome extends Component {
  constructor() {
    super();
    this.getUsers();
    this.state({
      allEmps: []
    });
  }
  getUsers = () => {
    fetch(`http://localhost:3000/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(resp => resp.json())
      .then(data => console.log("users data when getting logged in", data))
      .then(data =>
        this.setState({
          allEmps: data
        })
      );
  };

  render() {
    let empList = this.state.allEmps.map((emp, index) => {
      return <UserList key={index} emp={emp} />;
    });

    return (
      <div>
        <AddNewUser />
        {/* {empList} */}
      </div>
    );
  }
}
export default AdminHome;
