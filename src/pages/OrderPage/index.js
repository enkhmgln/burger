import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

import css from "./style.module.css";

import Order from "../../components/Order";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../redux/actions/orderAction";

const OrderPage = (props) => {
  useEffect(() => {
    props.getOrders(props.userID);
  }, []);
  // Ирсэн json - ыг string болгодог функц ==> JSON.stringify
  // console.log(JSON.stringify(this.state.orders))
  return (
    <div className={css.OrderPage}>
      {!props.userID && <Navigate to={"/login"} replace />}
      <h1>Бүх захиалгууд</h1>
      {props.spinner ? (
        <Spinner spinner={props.spinner} />
      ) : (
        props.orders.map((el) => {
          let address = el[1].address;
          return (
            <Order
              orts={el[1].orts}
              key={el[0]}
              price={el[1].dun}
              name={address.name}
              city={address.city}
              street={address.street}
            />
          );
        })
      )}
      {props.error && <p>{props.error.message}</p>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    spinner: state.orderReducer.spinner,
    error: state.orderReducer.error,
    userID: state.loginSignUpReducer.userID,
    token: state.loginSignUpReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (userID) => {
      dispatch(actions.getOrders(userID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
