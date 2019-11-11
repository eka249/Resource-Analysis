import React, { Component } from "react";
import logo from "./logo.svg";
import SignIn from "./components/signIn_and_admin/SignIn";
import "./App.css";
import AddNewUser from "./components/admin/addNewUser";
import ManagerContainer from "./containers/ManagerContainer";
import AdminHome from "./containers/AdminHome";
import AllRoutes from "./AllRoutes";
import EmpContainer from "./containers/EmpContainer";
import UserNavBar from "./containers/UserNavBar";
import AdminNavBar from "./containers/AdminNavBar";
import jwtDecode from "jwt-decode";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch,
  Redirect,
  useHistory
} from "react-router-dom";
class App extends Component {
  state = {
    logged_in: false,
    user: null,
    redirect: true
  };

  getLoggedIn = data => {
    this.setState(prevState => {
      return { logged_in: true, user: data };
    });
  };

  logOut = () => {
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
          <Route exact path="/">
            <SignIn getLoggedIn={this.getLoggedIn}></SignIn>
          </Route>
          <Route path="/admin">
            <AdminNavBar
              logOut={this.logOut}
              user={this.state.user}
              loggedIn={this.state.logged_in}
            />
            <AdminHome
              logOut={this.logOut}
              user={this.state.user}
              loggedIn={this.state.logged_in}
            />
          </Route>

          <Route path="/manager">
            <UserNavBar
              logOut={this.logOut}
              user={this.state.user}
              loggedIn={this.state.logged_in}
            />
            <ManagerContainer
              logOut={this.logOut}
              user={this.state.user}
              loggedIn={this.state.logged_in}
            />
          </Route>
          <Route path="/employee">
            <UserNavBar
              logOut={this.logOut}
              user={this.state.user}
              loggedIn={this.state.logged_in}
            />
            <EmpContainer
              logOut={this.logOut}
              user={this.state.user}
              loggedIn={this.state.logged_in}
            />
          </Route>
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
