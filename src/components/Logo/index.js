import React from "react";
import css from "./style.module.css";
import logo from "../../assets/images/burger-logo.png";

const Logo = () => {
  return (
    <div className={css.Logo}>
      <img alt="Лого" src={logo} />
    </div>
  );
};

export default Logo;
