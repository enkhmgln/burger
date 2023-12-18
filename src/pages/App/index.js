import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";
import { Navigate, Route, Routes } from "react-router-dom";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import * as actions from "../../redux/actions/loginAction";
import * as signupActions from "../../redux/actions/signUpAction";
import Logout from "../Logout";

const App = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar((prevState) => !prevState);
  };

  // componentDidMount = () => {
  //   const token = localStorage.getItem("token");
  //   const userID = localStorage.getItem("userID");
  //   // const refreshToken = localStorage.getItem("refreshToken");
  //   const expireDate = new Date(localStorage.getItem("expireDate"));
  //   if (token) {
  //     // Token - ны хугацаа дуусаагүЙ байвал:
  //     if (expireDate > new Date()) {
  //       this.props.autoLogin(token, userID);
  //       // Token хүчингүй болох хугацааг тоооцоолж
  //       // Хэсэг хугацааны дараа logout хийнэ
  //       this.props.autoLogoutAfterMillSec(
  //         expireDate.getTime() - new Date().getTime()
  //       );
  //     }
  //     // Хугацаа нь дууссан байвал :
  //     else {
  //       this.props.logout();
  //     }
  //   }
  // };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userID = localStorage.getItem("userID");
    // const refreshToken = localStorage.getItem("refreshToken");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    if (token) {
      // Token - ны хугацаа дуусаагүЙ байвал:
      if (expireDate > new Date()) {
        props.autoLogin(token, userID);
        // Token хүчингүй болох хугацааг тоооцоолж
        // Хэсэг хугацааны дараа logout хийнэ
        props.autoLogoutAfterMillSec(
          expireDate.getTime() - new Date().getTime()
        );
      }
      // Хугацаа нь дууссан байвал :
      else {
        props.logout();
      }
    }
  }, []);

  return (
    <div className={css.container}>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
      <main className={css.main}>
        <Routes>
          {/* {props.userID ? ( */}
          <>
            <Route path="/logout" element={<Logout />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/" element={<BurgerPage />} />
          </>
          {/* // ) : ( */}
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </>
          {/* )} */}
        </Routes>
      </main>
    </div>
  );
};

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
