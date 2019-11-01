import React from "react";
import logo from "./logo.svg";
import SignIn from "./components/SignIn";
import "./App.css";

function App() {
  submit = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <body>
          <SignIn onSubmit={this.submit} />
          {/* <AdminHome /> */}
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
