import React, { Component } from "react";
import SignIn from "./components/signIn_and_admin/SignIn";
import "./App.css";
import { history } from "./authorizationHelpers/history";
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
import { getOverlappingDaysInIntervals } from "date-fns";

class App extends Component {
  state = {
    logged_in: false,
    user: null,
    redirect: true,
    employees: [],
    role: null
  };
  getLoggedIn = data => {
    console.log("hits get logged in  app", data);
    // console.log(data);
    return (
      fetch(`http://localhost:3000/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accepts: "application/json",
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(this.getRole(data))
        // .then(data => this.getRole(data));
        .then(this.setState({ user: data.user, logged_in: true }))
      // .then(this.props.history.push(`/${this.state.role}`))
    );

    // .then(this.getRole(this.state.user.id));
    // .then(data => console.log("this is the data", data.user.id));

    // .then(console.log(("this should be the user id", this.state.user.id)));
  };

  getRole = data => {
    console.log("hit getrole", data.user);
    fetch(`http://localhost:3000/users/${data.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      // .then(data => console.log("output from getRole fetch", data.role));
      .then(
        this.setState({
          role: data.user.role
        })
      );
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
      <Router history={history}>
        <div>
          {current_user}
          <Route exact path="/login">
            <SignIn getLoggedIn={this.getLoggedIn}></SignIn>
          </Route>
          {/* {this.state.logged_in && this.state.user.role ==="admin" ? ( */}
          {/* <Route path="/admin">
            <AdminNavBar
              logOut={this.logOut}
              user={this.state.user}
              loggedIn={this.state.logged_in}
            />
            <AdminHome
              employees={this.state.employees}
              logOut={this.logOut}
              user={this.state.user}
              loggedIn={this.state.logged_in}
            />
          </Route> */}

          <Route
            exact
            path="/manager"
            render={props => (
              // [
              //   <UserNavBar
              //     logOut={this.logOut}
              //     user={this.state.user}
              //     loggedIn={this.state.logged_in}
              //     {...props}
              //   />
              // ],

              <ManagerContainer
                logOut={this.logOut}
                user={this.state.user}
                loggedIn={this.state.logged_in}
                {...props}
              />
            )}
          />

          {/* <Route path="/employee">
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
          </Route> */}
        </Router>
      </div>
    );
  }
}

export default App;
// let tasks = this.state.tasks.map(task =>
//   task.user_id === this.state.user_id
//     ? // <li key={task.id}>
//       //   {task.description}
//       //   <button
//       //     className="deleteButton"
//       //     key={task.id}
//       //     onClick={e => this.handleDeleteTask(e, task.id)}
//       //   >
//       //     X
//       //   </button>
//       // </li>
//       task
//     : null
// );
// let mytasks = tasks.filter(task => (task !== null ? task.project : null));
// let myprojects = mytasks.map(project => project.project.title);
// let uniqueProjects = new Set(myprojects);
// let userProjects = [...uniqueProjects];
// let myprojectids = mytasks.map(project => project.project_id);
// let uniqueProjectIds = new Set(myprojectids);
// let userProjectIds = [...uniqueProjectIds];
// // .map(task => task.project);
// console.log("Tasks", { tasks });
// console.log("MyTasks", { mytasks });
// console.log("MyTasks", { myprojects });
// console.log("MyTasks", { myprojectids });
// console.log(userProjects);
// console.log(userProjectIds);
