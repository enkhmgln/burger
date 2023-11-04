import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";

const Spinner = (props) => {
  return (
    props.spinner && (
      <div>
        <Shadow show={props.spinner} />
        <div className={css.loader}></div>
      </div>
    )
  );
};

export default Spinner;
