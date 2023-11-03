import React from "react";
import css from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${css.btn} ${css[props.cName]}`}
      onClick={props.btnOnClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
