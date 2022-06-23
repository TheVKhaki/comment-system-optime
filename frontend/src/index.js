import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Redux
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
//React Router
import { BrowserRouter } from "react-router-dom";
//Create Store
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

document.title = "QPoker-Trendsetter of iGaming";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
