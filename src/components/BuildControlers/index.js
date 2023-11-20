import React from "react";
import BuildController from "../BuildControler";
import css from "./_.module.css";

const BuildControllers = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ : <strong>{props.price}</strong>
      </p>
      {Object.entries(props.INGREDIENT_NAMES).map((el, index) => {
        return (
          <BuildController
            key={`${el[0]}${index}`}
            disabledButton={props.disabledButton}
            ortsNemeh={props.ortsNemeh}
            ortsHasah={props.ortsHasah}
            type={el[0]}
            ner={el[1]}
          />
        );
      })}
      <button
        disabled={props.isPurchasing}
        className={css.OrderButton}
        onClick={() => {
          props.showConfirmOrder();
        }}
      >
        Захиалах
      </button>
    </div>
  );
};

export default BuildControllers;
