import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  const orts = props.orts;
  return (
    <div className={css.Order}>
      <div className={css.OrderIngredient}>
        <div>
          <h2>Бургерийн орц:</h2>
          <p>Гахайн мах : {orts.bacon}</p>
          <p>Үхрийн мах : {orts.meat}</p>
          <p>Салад : {orts.salad}</p>
          <p>Бяслаг : {orts.cheese}</p>
        </div>
        <h5>Нийт үнэ : {props.price}₮ </h5>
      </div>
      <div>
        <h2>Хүргэлтийн хаяг:</h2>
        <h4>Нэр : {props.name}</h4>
        <p>Гудамж : {props.street}</p>
        <p>Хот : {props.city}</p>
      </div>
    </div>
  );
};

export default Order;
