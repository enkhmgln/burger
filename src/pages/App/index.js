import React, { Component } from "react";
import { connect } from "react-redux";

import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import { Route, Routes } from "react-router-dom";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import * as actions from "../../redux/actions/loginAction";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
    };
  }
  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");
    // Хэрвээ localStorage дээр token байвал аваад нэвтрэнэ.
    if (token) {
      this.props.autoLogin(token, userID);
    }
  };
  render() {
    return (
      <div className={css.container}>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.main}>
          <Routes>
            <>
              <Route path="/shipping" Component={ShippingPage} />
              <Route path="/orders" Component={OrderPage} />
              <Route path="/" Component={BurgerPage} />
              <Route path="/login" Component={LoginPage} />
              <Route path="/signup" Component={SignUpPage} />
            </>
          </Routes>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.loginSignUpReducer.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: (token, userID) => {
      dispatch(actions.loginUserSuccess(token, userID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
