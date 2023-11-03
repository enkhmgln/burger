import React from "react";
import css from "./modal.module.css";
import Shadow from "../Shadow";
const Modal = ({ children, closeConfirmOrder, confirmOrder }) => {
  return (
    <>
      <Shadow show={confirmOrder} close={closeConfirmOrder} />
      <div
        className={css.Modal}
        style={{
          transform: confirmOrder ? "translateY(0)" : "translateY(-100vh)",
          opacity: confirmOrder ? "1" : "0",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
