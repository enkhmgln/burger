import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <>
      <ul className={css.Menu}>
        <MenuItem active={true} link="/" text="ШИНЭ ЗАХИАЛГА" />
        <MenuItem link="/login" text="НЭВТРЭХ" />
      </ul>
    </>
  );
};

export default Menu;
