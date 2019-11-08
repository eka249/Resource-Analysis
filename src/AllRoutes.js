import React, { Component, Switch } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/signIn_and_admin/SignIn";
import ManagerContainer from "./containers/ManagerContainer";
import AdminHome from "./containers/AdminHome";

class AllRoutes extends Component {
  render() {
    return (
      // <Switch>
      <BrowserRouter>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/adminhome" component={AdminHome} />
        <Route exact path="/managerhome" component={ManagerContainer} />
        {/* <Route exact path="/emphome" component={EmpContainer} /> */}

        <Route exact path="/dashboard" component={ManagerContainer} />
      </BrowserRouter>
      // </Switch>
    );
  }
}

export default AllRoutes;
