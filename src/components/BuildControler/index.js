import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/burgerAction";
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

const mapDispatchToProps = (dispatch) => {
  return {
    addIngredient: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    removeIngredient: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};

export default connect(null, mapDispatchToProps)(BuildControler);
