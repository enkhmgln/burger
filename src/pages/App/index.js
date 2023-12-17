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
import * as signupActions from "../../redux/actions/signUpAction";

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
    // const refreshToken = localStorage.getItem("refreshToken");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    if (token) {
      // Token - ны хугацаа дуусаагүЙ байвал:
      if (expireDate > new Date()) {
        this.props.autoLogin(token, userID);
        // Token хүчингүй болох хугацааг тоооцоолж
        // Хэсэг хугацааны дараа logout хийнэ
        this.props.autoLogoutAfterMillSec(
          expireDate.getTime() - new Date().getTime()
        );
      }
      // Хугацаа нь дууссан байвал :
      else {
        this.props.logout();
      }
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
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/" element={<BurgerPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
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
    logout: () => {
      dispatch(signupActions.logout());
    },
    autoLogoutAfterMillSec: (time) => {
      dispatch(signupActions.autoLogoutAfterMillSec(time));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
