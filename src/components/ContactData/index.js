import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions/orderAction";

import css from "./style.module.css";
import Button from "../General/Button";
import { useNavigate } from "react-router-dom";

const ContactData = (props) => {
  const [name, setName] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const nav = useNavigate();

  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      nav("/orders");
    }
  }, [props.newOrderStatus.finished, props.newOrderStatus.error, nav]);

  const getName = (event) => {
    setName(event.target.value);
  };
  const getStreet = (event) => {
    setStreet(event.target.value);
  };
  const getCity = (event) => {
    setCity(event.target.value);
  };
  const saveOrder = () => {
    const order = {
      userID: props.userID,
      orts: props.ingredients,
      dun: props.price,
      address: {
        name,
        city: city,
        street: street,
      },
    };
    props.saveOrder(order);
  };

  const goBack = () => {
    nav("/");
  };

  return (
    <div className={css.ContactData}>
      {props.error && <p>Алдаа : {props.error.message}</p>}
      <h4>Нийт үнэ : {props.price}₮ </h4>

      <input
        onChange={getName}
        type="text"
        name="name"
        placeholder="Таны нэр"
      />
      <input
        onChange={getStreet}
        type="text"
        name="street"
        placeholder="Таны хаяг"
      />
      <input
        onChange={getCity}
        type="text"
        name="city"
        placeholder="Таны хот"
      />
      <Button text="ЗАХИАЛГЫГ ЦУЦЛАХ" cName="error" btnOnClick={goBack} />
      <Button text="ИЛГЭЭХ" cName="success" btnOnClick={saveOrder} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.price,
    ingredients: state.burgerReducer.ingredients,
    newOrderStatus: state.orderReducer.newOrder,
    userID: state.loginSignUpReducer.userID,
    error: state.orderReducer.newOrder.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
