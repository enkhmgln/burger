import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import logo from "../../assets/images/burger-logo.png";
import Menu from "../Menu";

const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <div onClick={props.toggleSideBar} className={css.toggleSideBar}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <Logo logo={logo} />
      <nav className={css.HideOnMobile}>
        <Menu />
      </nav>
    </header>
  );
};

export default Toolbar;
