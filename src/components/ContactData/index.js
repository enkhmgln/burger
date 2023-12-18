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
  const navigate = useNavigate();
  useEffect(() => {
    if (props.newOrderStatus.finished && !props.newOrderStatus.error) {
      navigate("/orders");
    }
    // Цэвэрлэгч функц
    // Захиалгыг буцаагаад хоосон болгоно. Дараачийн захиалгад бэлдэнэ
    return () => {
      if (props.newOrderStatus.finished) {
        props.clearOrder();
      }
    };
    // eslint-disable-next-line
  }, [props.newOrderStatus.finished]);

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
    navigate("/");
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
    clearOrder: () => {
      dispatch(actions.clearOrder());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
