import React from "react";
import css from "./style.module.css";
import Shadow from "../Shadow";

const Spinner = () => {
  return (
    <div>
      <div className={css.loader}></div>
      <Shadow show={true} />
    </div>
  );
};

export default Spinner;
