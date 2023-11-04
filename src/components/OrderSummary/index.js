import React from "react";
import css from "./style.module.css";
import Button from "../General/Button";

const OrderSummary = ({
  price,
  ingredients,
  INGREDIENT_NAMES,
  closeConfirmOrder,
  onContinue,
}) => {
  return (
    <div className={css.OrderSummary}>
      <h3>Захиалга баталгаажуулалт</h3>
      <h4>Таны сонгосон орцууд:</h4>
      <ul>
        {Object.entries(ingredients).map((el) => {
          return (
            <li key={`${el}`}>
              {INGREDIENT_NAMES[el[0]]} : {el[1]}
            </li>
          );
        })}
      </ul>
      <p>
        Захиалгын нийт дүн : <strong>{price}₮</strong>
      </p>
      <div>
        <Button cName="error" text="ТАТГАЛЗАХ" btnOnClick={closeConfirmOrder} />
        <Button cName="success" text="ҮРГЭЛЖЛҮҮЛЭХ" btnOnClick={onContinue} />
      </div>
    </div>
  );
};

export default OrderSummary;
