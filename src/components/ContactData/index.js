import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions/orderAction";

import css from "./style.module.css";
import Button from "../General/Button";
import { useNavigate } from "react-router-dom";

const ContactData = (props) => {
  const [info, setInfo] = useState({
    name: null,
    street: null,
    city: null,
  });
  const nav = useNavigate();
  // state = {
  //   name: null,
  //   street: null,
  //   city: null,
  // };
  const getName = (event) => {
    // this.setState({ name: event.target.value });
    setInfo({ ...info, name: event.target.value });
  };
  const getStreet = (event) => {
    // this.setState({ street: event.target.value });
    setInfo({ ...info, street: event.target.value });
  };
  const getCity = (event) => {
    // this.setState({ city: event.target.value });`
    setInfo({ ...info, city: event.target.value });
  };
  useEffect(()=> {
    if(props.newOrderStatus.finished && !props.newOrderStatus.error) {
      nav('/orders')
    }
  }, [props.newOrderStatus.finished , props.newOrderStatus.error , nav])

  const saveOrder = () => {
    const order = {
      userID : props.userID,
      orts: props.ingredients,
      dun: props.price,
      address: {
        name: info.name,
        city: info.city,
        street: info.street,
      },
    };
    props.saveOrder(order);
  
  };  

  const goBack = () => {
    nav("/");
  };

  return (
    <div className={css.ContactData}>
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
    userID : state.loginSignUpReducer.userID
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
