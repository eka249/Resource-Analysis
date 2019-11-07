import React from "react";
import logo from "./logo.svg";
import SignIn from "./components/signIn_and_admin/SignIn";
import "./App.css";
import AddNewUser from "./components/signIn_and_admin/addNewUser";
import ManagerContainer from "./containers/ManagerContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <SignIn />
          <br></br>
          {/* <AddNewUser /> */}
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

export default App;
