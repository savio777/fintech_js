import React from "react";

import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import store from "./store";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
        <ToastContainer />
      </Provider>
    </div>
  );
}
