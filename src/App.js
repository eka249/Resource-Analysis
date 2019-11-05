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
        <img src={logo} className="App-logo" alt="logo" />
        <body>
          {/* <SignIn /> */}
          <AddNewUser />

          {/* <AdminHome /> */}
          {/* <ManagerContainer /> */}
        </body>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
