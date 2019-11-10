import React, { Component, Switch } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import SignIn from "./components/signIn_and_admin/SignIn";
import ManagerContainer from "./containers/ManagerContainer";
import AdminHome from "./containers/AdminHome";

class AllRoutes extends Component {
  render() {
    return (
      <Switch>
        <BrowserRouter>
          <Route path="/">
            <SignIn />
          </Route>
          {/* <Route
            exact
            path="/"
            render={props => <SignIn getLoggedIn={this.getLoggedIn} />}
          /> */}
          {/* <Route exact path="/admin" component={AdminHome} /> */}
          {/* <Route
            exact
            path="/admin"
            // {...rest}
            render={props => <AdminHome {...props} user={this.props.user} />}
          /> */}
          {/* <Route exact path="/manager" component={ManagerContainer} /> */}
          {/* <Route exact path="/emphome" component={EmpContainer} /> */}
        </BrowserRouter>
      </Switch>
    );
  }
}

export default AllRoutes;
