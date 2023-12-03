import React from "react";
import { connect } from "react-redux";
import * as actions from '../../redux/actions/burgerAction'

import BuildController from "../BuildControler";
import css from "./_.module.css";

const BuildControllers = (props) => {
  const disabledButton = { ...props.ingredients };
  for (let key in disabledButton) {
    disabledButton[key] = disabledButton[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.price}</strong>
      </p>
      {Object.entries(props.ingredientNames).map((el, index) => {
        return (
          <BuildController
            key={`${el[0]}${index}`}
            disabledButton={disabledButton}
            ortsNemeh={props.ortsNemeh}
            ortsHasah={props.ortsHasah}
            type={el[0]}
            ner={el[1]}
          />
        );
      })}
      <button
        disabled={!props.isPurchasing}
        className={css.OrderButton}
        onClick={() => {
          props.showConfirmModal();
        }}
      >
        Захиалах
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients : state.ingredients,
    ingredientNames: state.ingredientNames,
    price : state.price,
    isPurchasing : state.isPurchasing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ortsNemeh: ortsNer => dispatch(actions.addIngredient(ortsNer)),
    ortsHasah: ortsNer => dispatch(actions.removeIngredient(ortsNer))
  };
};

export default connect(mapStateToProps , mapDispatchToProps)(BuildControllers);
