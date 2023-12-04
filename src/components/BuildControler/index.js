import React from "react";
import css from "./css.module.css";

const BuildControler = (props) => {
  const disabledButton = props.disabledButton;
  return (
    <div className={css.BuildControl}>
      <p className={css.Label}>{props.ner}</p>
      <button
        className={css.Less}
        disabled={disabledButton[props.type]}
        onClick={() => {
          props.removeIngredient(props.type);
        }}
      >
        Хасах
      </button>
      <button
        className={css.More}
        onClick={() => {
          props.addIngredient(props.type);
        }}
      >
        Нэмэх
      </button>
    </div>
  );
};

export default BuildControler;
