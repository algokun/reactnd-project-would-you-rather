import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SelectUser from "./components/SelectUser";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SelectUser />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
