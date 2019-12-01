import React, { Component } from "react";
import { List, Button } from "semantic-ui-react";
import UserList from "../components/admin/UserList";
import AddNewUser from "../components/admin/addNewUser";

class AdminHome extends Component {
  constructor() {
    super();
    this.getUsers();
    this.state = {
      allEmps: []
    };
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
      .then(data =>
        this.setState({
          allEmps: data
        })
      );
  };

  render() {
    return (
      <div>
        <AddNewUser />
        {this.state.allEmps.map((emp, index) => {
          return (
            <UserList key={index} emp={emp} allEmps={this.state.allEmps} />
          );
        })}
      </div>
    );
  }
}
export default AdminHome;
