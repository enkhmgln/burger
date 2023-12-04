import React from "react";
import { useNavigate } from "react-router-dom";
import {connect} from 'react-redux'

import css from "./style.module.css";
import Button from "../General/Button";

const OrderSummary = ({
  price,
  ingredients,
  ingredientNames,
  closeConfirmModal
}) => {
const nav = useNavigate();

const onContinue = () => {
  nav('/shipping')
}

  return (
    <div className={css.OrderSummary}>
      <h3>Захиалга баталгаажуулалт</h3>
      <h4>Таны сонгосон орцууд:</h4>
      <ul>
        {Object.entries(ingredients).map((el) => {
          return (
            <li key={`${el}`}>
              {ingredientNames[el[0]]} : {el[1]}
            </li>
          );
        })}
      </ul>
      <p>
        Захиалгын нийт дүн : <strong>{price}₮</strong>
      </p>
      <div>
        <Button cName="error" text="ТАТГАЛЗАХ" btnOnClick={closeConfirmModal} />
        <Button cName="success" text="ҮРГЭЛЖЛҮҮЛЭХ" btnOnClick={onContinue} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients : state.burgerReducer.ingredients,
    price : state.burgerReducer.price,
    ingredientNames : state.burgerReducer.ingredientNames
  }
}

export default connect(mapStateToProps)(OrderSummary);
