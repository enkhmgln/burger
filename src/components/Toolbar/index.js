import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import logo from "../../assets/images/burger-logo.png";

const Toolbar = () => {
  return (
    <header className={css.toolbar}>
      <div>Sidebar</div>
      <Logo logo={logo} />
      <nav>Цэс</nav>
    </header>
  );
};

export default Toolbar;
