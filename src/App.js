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
  componentDidMount() {
    fetch("http://localhost:3000/users", {
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
          employees: data
        })
      );
  }
  state = {
    logged_in: false,
    user: null,
    redirect: true,
    employees: []
  };

  getLoggedIn = data => {
    this.setState(prevState => {
      return { logged_in: true, user: data };
    });
  };

  logOut = () => {
    localStorage.jwt = null;
    this.setState(prevState => {
      return {
        logged_in: false,
        user: null,
        redirect: true
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
              employees={this.state.employees}
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
