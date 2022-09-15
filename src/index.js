import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// import RouteApp from "./components/App";
import getStore from "./store/getStore";
import App from "./components/App";

import "./index.css";
// import Users from "./components/Users";
// import Counter from "./components/Counter";
// import Home from "./components/Home";
// import AddDetails from "./features/users/components/Adddetails";
// import EditDetails from "./features/users/components/EditDetails";

const { store } = getStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
