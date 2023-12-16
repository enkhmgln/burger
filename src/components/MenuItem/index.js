import React from "react";
import { NavLink } from "react-router-dom";
import css from "./style.module.css";

const MenuItem = (props) => {
  return (
    <>
      <li className={`${css.MenuItem} `}>
        <NavLink  onClick={props.onClick}
          className={({ isActive }) => (isActive ? css.active : "")}
          to={`${props.link}`}
        >
          {props.text}
        </NavLink>
        {/* <a
          href={props.link}
          className={`${css[props.active ? "active" : null]}`}
        >
          {props.text}
        </a> */}
      </li>
    </>
  );
};

export default MenuItem;
