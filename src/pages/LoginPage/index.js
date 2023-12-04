import React, { useState } from "react";
import css from "./style.module.css";
import Button from "../../components/General/Button";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email , setEmail] = useState('');
  return (
    <div className={css.Login}>
      <h1>Нэвтрэх </h1>
      <input type="input" placeholder="Имэйл хаягаа оруулна уу"  onChange={(event) => {setEmail(event.target.value)}}/>
      <input
        type="password"
        placeholder="Нууц үгээ оруулна уу"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
     
      <Button cName="success" text="Нэвтрэх"  btnOnClick />

    </div>
  );
};

export default Login;
