import React from "react";
import css from "./style.module.css";

const Logo = ({logo}) => {
  return (
    <div className={css.Container}>
      <img alt="Лого" src={logo} />
    </div>
  );
};

export default Logo;
