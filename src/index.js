import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/storeConfig";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
