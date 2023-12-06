import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import App from "./pages/App";
import "./index.css";
import burgerReducer from "./redux/reducers/burgerReducer";
import orderReducer from "./redux/reducers/orderReducer";
import signUpReducer from "./redux/reducers/signUpReducer";

const loggingMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log("Middleware ===>  dispatching : ", action);
      console.log("Middleware ==> state BEFORE", store.getState());
      const result = next(action);

      console.log("Middleware ==> state AFTER", store.getState());
      return result;
    };
  };
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWares = [loggingMiddleware, thunk];

const reducers = combineReducers({
  burgerReducer: burgerReducer,
  orderReducer,
  signUpReducer,
});

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(...middleWares))
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
