import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import thunkMiddleware = require("redux-thunk");
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";

const composeEnhancer =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__) ||
  compose;
//the above format found here: https://github.com/reduxjs/redux-thunk/issues/35

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
// more reducer files will have to be in here. not sure how to do this...will figure out

// console.log("store", store.getState());

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
