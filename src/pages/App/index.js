import React, { useEffect, useState, Suspense, lazy } from "react";
import { connect } from "react-redux";

import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions/loginAction";
import * as signupActions from "../../redux/actions/signUpAction";
import BurgerContext from "../../context/BurgerContext";

const Logout = lazy(() => {
  return import("../Logout");
});

const BurgerPage = lazy(() => {
  return import("../BurgerPage");
});
const OrderPage = lazy(() => {
  return import("../OrderPage");
});
const ShippingPage = lazy(() => {
  return import("../ShippingPage");
});
const LoginPage = lazy(() => {
  return import("../LoginPage");
});
const SignUpPage = lazy(() => {
  return import("../SignUpPage");
});

const App = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar((prevState) => !prevState);
  };
  const navigate = useNavigate();

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
    // Хэрвээ token байхгүй эсвэл хүчинтэй хугацаа нь дууссан байвал login хуудас руу буцаана.
    if (!token || expireDate <= new Date()) {
      navigate("/login");
    }
  }, []);

  return (
    <div className={css.container}>
      <Toolbar toggleSideBar={toggleSideBar} />
      <SideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
      <main className={css.main}>
        <Suspense fallback={<div>Түр хүлээнэ үү...</div>}>
          <BurgerContext.Provider value={"" + showSideBar}>
            <Routes>
              {/* Нэвтэрсэн хэрэглэгчийн үзэх боломжтой хуудас */}
              {props.userID && (
                <>
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/shipping" element={<ShippingPage />} />
                  <Route path="/orders" element={<OrderPage />} />
                  <Route path="/" element={<BurgerPage />} />
                </>
              )}

              {/* Login хийгээгүй хэрэглэгч үзэж болох хуудас*/}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </BurgerContext.Provider>
        </Suspense>
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
