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
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

class App extends Component {
  //during testing:
  // state = {
  //   logged_in: true,
  //   user: {
  //     email: "2@2.com",
  //     first_name: "asif test",
  //     last_name: "idk his last name test",
  //     unit: "mod5",
  //     password: "1234",
  //     role: "admin"
  //   },
  //   redirect: true,
  //   employees: [
  // {
  //   email: "3@3.com",
  //   first_name: "j test",
  //   last_name: "idk his last name test2",
  //   unit: "closest to admin",
  //   password: "1234",
  //   role: "emp"
  // },
  // {
  //   email: "4@4.com",
  //   first_name: "Jared",
  //   last_name: "idk his last name test3",
  //   unit: "mod5",
  //   password: "1234",
  //   role: "emp"
  // }
  //   ],
  //   role: "admin",
  //   current_user: null
  // };
  state = {
    logged_in: false,
    user: null,
    redirect: true,
    role: null,
    current_user: null
  };
  getLoggedIn = data => {
    return fetch(`http://localhost:3000/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(this.getRole(data))
      .then(this.setState({ user: data.user, logged_in: true }));
    // .then(this.props.history.push(`/${this.state.role}`))
  };

  getRole = data => {
    fetch(`http://localhost:3000/users/${data.user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
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
    let status =
      this.state.logged_in && this.state.role === "admin" ? (
        <Route
          exact
          path="/admin"
          render={props => (
            <div>
              <AdminNavBar
                logOut={this.logOut}
                user={this.state.user}
                loggedIn={this.state.logged_in}
                {...props}
              />
              <AdminHome
                // employees={this.state.employees}
                logOut={this.logOut}
                user={this.state.user}
                loggedIn={this.state.logged_in}
                {...props}
              />
            </div>
          )}
        />
      ) : this.state.logged_in && this.state.role === "manager" ? (
        <Route
          exact
          path="/manager"
          render={props => (
            <div>
              <UserNavBar
                logOut={this.logOut}
                user={this.state.user}
                loggedIn={this.state.logged_in}
                {...props}
              />
              <ManagerContainer
                logOut={this.logOut}
                user={this.state.user}
                loggedIn={this.state.logged_in}
                {...props}
                // employees={this.state.employees}
              />
            </div>
          )}
        />
      ) : this.state.logged_in && this.state.role === "emp" ? (
        <Route
          exact
          path="/emp"
          render={props => (
            <div>
              <UserNavBar
                logOut={this.logOut}
                user={this.state.user}
                loggedIn={this.state.logged_in}
                {...props}
              />
              <EmpContainer
                logOut={this.logOut}
                user={this.state.user}
                loggedIn={this.state.logged_in}
                {...props}
              />
            </div>
          )}
        />
      ) : null;
    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={props => (
              <SignIn getLoggedIn={this.getLoggedIn} {...props} />
            )}
          />
          {status}
        </Router>
      </div>
    );
  }

  //     <Router history={history}>
  //       <div>
  //         {this.state.user}
  //         <Route exact path="/login">
  //           <SignIn getLoggedIn={this.getLoggedIn}></SignIn>
  //         </Route>
  //         {/* {this.state.logged_in && this.state.user.role ==="admin" ? ( */}
  //         {/* <Route path="/admin">
  //           <AdminNavBar
  //             logOut={this.logOut}
  //             user={this.state.user}
  //             loggedIn={this.state.logged_in}
  //           />
  //           <AdminHome
  //             employees={this.state.employees}
  //             logOut={this.logOut}
  //             user={this.state.user}
  //             loggedIn={this.state.logged_in}
  //           />
  //         </Route> */}

  //         <Route
  //           exact
  //           path="/manager"
  //           render={props => (
  //             // [
  //             //   <UserNavBar
  //             //     logOut={this.logOut}
  //             //     user={this.state.user}
  //             //     loggedIn={this.state.logged_in}
  //             //     {...props}
  //             //   />
  //             // ],
  //             <ManagerContainer
  //               logOut={this.logOut}
  //               user={this.state.user}
  //               loggedIn={this.state.logged_in}
  //               {...props}
  //             />
  //           )}
  //         />

  //         <Route path="/employee">
  //           <UserNavBar
  //             logOut={this.logOut}
  //             user={this.state.user}
  //             loggedIn={this.state.logged_in}
  //           />
  //           {/* <EmpContainer
  //             logOut={this.logOut}
  //             user={this.state.user}
  //             loggedIn={this.state.logged_in}
  //           /> */}
  //         </Route>
  //       </div>
  //     </Router>
  //   );
  // }
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
