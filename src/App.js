import React, { Component } from "react";
import logo from "./logo.svg";
import SignIn from "./components/signIn_and_admin/SignIn";
import "./App.css";
import AddNewUser from "./components/signIn_and_admin/addNewUser";
import ManagerContainer from "./containers/ManagerContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      logged_in: false,
      user: null
    };
  }
  getLoggedIn = json => {
    console.log("initiated sign in fetch");
    fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => {
          return { logged_in: true, user: data.user };
        });
      });
  };
  logOut = () => {
    localStorage.removeItem("token");
    this.setState(prevState => {
      return {
        logged_in: false,
        user: null
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <body>
            {/* <SignIn /> */}
            <br></br>
            <AddNewUser />
            {/* <ManagerContainer /> */}
            {/* <TaskList />

          {/* <AdminHome /> */}
            {/* <ManagerContainer /> */}
          </body>
          {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        </header>
      </div>
    );
  }
}

export default App;
