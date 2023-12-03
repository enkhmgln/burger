import React, { useState } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";

const Login = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [matchedPassword , setMatchedPassword] = useState(false)
  const validatePassword = () => {
    if(password1  !== password2){
      setMatchedPassword(true)
     }
     else {
      setMatchedPassword(false)
     }
  }

  return (
    <div className={css.Login}>
      <h1>Нэвтрэх </h1>
      <input type="input" placeholder="Имэйл хаягаа оруулна уу" />
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
      <Button cName="success" text="Нэвтрэх"  btnOnClick = {validatePassword}/>
      {matchedPassword ? <p className={css.PasswordNotMatching}> Нууц үг  хоорондоо таарахгүй байна.</p> : null}
    </div>
  );
};

export default Login;
