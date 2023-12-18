import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import * as actions from "../../redux/actions/loginAction";

import css from "./style.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";

const Login = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const getPassword = (event) => {
    setPassword(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  //  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   switch (props.message) {
  //     case "INVALID_LOGIN_CREDENTIALS":
  //       setMessage("И-мэйл эсвэл нууц үг буруу байна.");
  //       break;
  //     case "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
  //       setMessage("Түр хүлээж байгаад дахин оролдон уу");
  //       break;
  //     default:
  //       setMessage("Алдаа гарлаа");
  //       break;
  //   }
  // }, [props.message]);

  const login = () => {
    props.loginUser(email, password);
    navigate("/orders");
  };
  return props.logginIn ? (
    <Spinner />
  ) : (
    <div className={css.Login}>
      {props.userID && <Navigate to="/" replace />}
      <h1>Нэвтрэх </h1>
      <input
        type="input"
        placeholder="И-мэйл хаягаа оруулна уу"
        onChange={(event) => getEmail(event)}
      />
      <input
        type="password"
        placeholder="Нууц үгээ оруулна уу"
        onChange={(event) => getPassword(event)}
      />
      {props.message && <p className="error">{props.message}</p>}

      <Button cName="success" text="Нэвтрэх" btnOnClick={login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.loginSignUpReducer.backendError,
    userID: state.loginSignUpReducer.userID,
    logginIn: state.loginSignUpReducer.logginIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => {
      dispatch(actions.loginUser(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
