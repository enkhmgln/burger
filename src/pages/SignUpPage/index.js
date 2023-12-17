import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/signUpAction";
import Spinner from "../../components/General/Spinner";

const SignUp = (props) => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(props.error);

  // switch (errorMessage) {
  //   case "INVALID_EMAIL":
  //     setErrorMessage("Тохирох и-мэйл хаяг оруулна уу");
  //     break;
  //   case "EMAIL_EXISTS":
  //     setErrorMessage("Хэрэглэгч аль хэдийн бүртгэлтэй байна.");
  //     break;
  // }

  const validatePassword = () => {
    if (password1 === password2) {
      props.signUpUser(email, password1);
      setErrorMessage("");
    } else {
      setErrorMessage("Нууц үг хоорондоо таарахгүй байна.");
    }
  };
  return props.saving ? (
    <Spinner />
  ) : (
    <div className={css.SignUp}>
      <h1 style={{ margin: "0.5rem 0" }}>Бүртгэл үүсгэх </h1>
      {props.userID && <Navigate to="/" />}
      <h4>Та өөрийн мэдээллээ оруулна уу.</h4>
      <input
        type="email"
        placeholder="Имэйл хаягаа оруулна уу"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Нууц үгээ оруулна уу"
        onChange={(event) => {
          setPassword1(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Нууц үгээ давтан оруулна уу"
        onChange={(event) => {
          setPassword2(event.target.value);
        }}
      />
      {errorMessage && <p className="error"> {errorMessage}</p>}
      {props.error && <p className="error"> {props.error}</p>}

      <Button cName="success" text="Бүртгүүлэх" btnOnClick={validatePassword} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    saving: state.loginSignUpReducer.saving,
    error: state.loginSignUpReducer.backendError,
    userID: state.loginSignUpReducer.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (email, password) => {
      dispatch(actions.signUpUser(email, password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
