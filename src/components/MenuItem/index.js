import React from "react";
import css from "./style.module.css";

const MenuItem = (props) => {
  return (
    <>
      <li className={`${css.MenuItem} `}>
        <a
          href={props.link}
          className={`${css[props.active ? "active" : null]}`}
        >
          {props.text}
        </a>
      </li>
    </>
  );
};

export default MenuItem;
