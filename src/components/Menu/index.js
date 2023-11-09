import React from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = () => {
  return (
    <>
      <ul className={css.Menu}>
        <MenuItem link="/" text="ШИНЭ ЗАХИАЛГА" />
        <MenuItem link="/orders" text="ЗАХИАЛГУУД" />
      </ul>
    </>
  );
};

export default Menu;
