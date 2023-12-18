import React from "react";
import { connect } from "react-redux";

import css from "./style.module.css";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Spinner from "../../components/General/Spinner";

const ShippingPage = (props) => {
  return props.newOrderStatus.saving ? (
    <Spinner />
  ) : (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "24px", marginBottom: "1rem" }}>
        <strong>Таны захиалга амттай байна гэдэгт итгэлтэй байна</strong>
      </p>
      <p style={{ fontSize: "24px", marginBottom: "1rem" }}>
        <strong> {props.price}₮</strong>
      </p>
      <Burger />
      <ContactData />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.price,
    newOrderStatus: state.orderReducer.newOrder,
  };
};

export default connect(mapStateToProps)(ShippingPage);
