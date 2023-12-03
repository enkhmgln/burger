import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import { createStore} from 'redux'


import App from "./pages/App";
import "./index.css";
import { burgerReducer } from "./redux/reducers/burgerReducer";

const store = createStore(
  burgerReducer,
)
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
