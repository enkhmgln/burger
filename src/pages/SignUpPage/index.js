import React, { useState } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Button from "../../components/General/Button";
import * as actions from "../../redux/actions/signUpAction";
import Spinner from "../../components/General/Spinner";

const SignUp = (props) => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [matchedPassword, setMatchedPassword] = useState("");
  const validatePassword = () => {
    if (password1 === password2) {
      props.signUpUser(email, password1);
      setMatchedPassword("");
    } else {
      setMatchedPassword("Нууц үг хоорондоо таарахгүй байна.");
    }
  };

  return (
    

      props.saving ? <Spinner/> : <div className={css.SignUp}>
      <h1 style={{ margin: "0.5rem 0" }}>Бүртгэлийн хэсэг </h1>
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
      {<p className={css.PasswordNotMatching}> {matchedPassword}</p>}
      <Button cName="success" text="Бүртгүүлэх" btnOnClick={validatePassword} />
    </div>
    
   
  );
};
const mapStateToProps = (state) => {
  return {
    saving: state.signUpReducer.saving,
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
