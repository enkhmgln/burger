import React from "react";
import { connect } from "react-redux";

import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

const Burger = (props) => {
  const ingredients = props.ingredients;
  const items = Object.entries(ingredients);
  let content = [];
  // eslint-disable-next-line
  items.map((el) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${el[0]}${i}`} type={el[0]} />);
  });
  return (
    <div className={css.burger}>
      <BurgerIngredient type="bread-top" />
      {content.length === 0 ? (
        <p>Хачиртай талхны орцоо сонгоно уу..</p>
      ) : (
        content
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
  };
};

export default connect(mapStateToProps)(Burger);
