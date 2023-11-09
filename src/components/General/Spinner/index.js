import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";

const Spinner = (props) => {
  return (
    props.spinner && (
      <div>
        <div className={css.loader}></div>
        <Shadow show={props.spinner} />
      </div>
    )
  );
};

export default Spinner;
