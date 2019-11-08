import React, { Component } from "react";
import logo from "./logo.svg";
import SignIn from "./components/signIn_and_admin/SignIn";
import "./App.css";
import AddNewUser from "./components/admin/addNewUser";
import ManagerContainer from "./containers/ManagerContainer";
import AdminHome from "./containers/AdminHome";
import AllRoutes from "./AllRoutes";
import NavBar from "./containers/NavBar";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch,
  useHistory
} from "react-router-dom";
import jwtDecode from "jwt-decode";

class App extends Component {
  // constructor() {
  //   super();
  state = {
    logged_in: false,
    user: null
  };
  // }
  getLoggedIn = data => {
    console.log(
      "setting user as the  data who has recieved a token and has it in local storage "
    );
    this.setState(prevState => {
      return { logged_in: true, user: data.user };
    });
  };

  logOut = () => {
    console.log("hit log out");
    localStorage.removeItem("jwt");
    this.setState(prevState => {
      return {
        logged_in: false,
        user: null
      };
    });
  };

  render() {
    return (
      <div>
        <Router>
          <NavBar
            logOut={this.logOut}
            user={this.state.user}
            loggedIn={this.state.logged_in}
          />
          <SignIn getLoggedIn={this.props.getLoggedIn}></SignIn>
        </Router>
      </div>
    );
  }
}

export default App;

//   if (user.role === "admin") {
//   this.props.history.push("/admin");
// } else if (this.state.user.role === "manager") {
//   this.props.history.push("/manager");
// } else if (this.state.user.role === "emp") {
//   this.props.history.push("/emphome");
// } else {
// console.log("you're getting an error message"));
// ()=>this.redirectSignIn());
