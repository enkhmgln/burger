import React from "react";
import css from "./css.module.css";

const Shadow = (props) => {
  return props.show ? (
    <div className={css.Shadow} onClick={props.closeConfirmOrder}></div>
  ) : null;
};
export default Shadow;
