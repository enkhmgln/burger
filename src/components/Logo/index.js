import React from "react";
import css from "./style.module.css";
import logo from "../../assets/images/burger-logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={css.Logo}>
      <Link to="/">
        <img alt="Лого" src={logo} />
      </Link>
    </div>
  );
};

export default Logo;
