import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const SideBar = ({ showSideBar, toggleSideBar }) => {
  return (
    <div>
      <Shadow show={showSideBar} close={toggleSideBar} />
      <div
        onClick={toggleSideBar}
        className={`${css.SideBar} ${showSideBar ? css["Open"] : css["Close"]}`}
      >
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SideBar;
