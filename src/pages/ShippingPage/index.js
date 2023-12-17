import React from "react";
import { connect } from "react-redux";

import css from "./style.module.css";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Spinner from "../../components/General/Spinner";

const ShippingPage = (props) => {
  // const navigate = useNavigate();
  // const cancelOrder = () => {
  //   navigate("/");
  // };
  // const contact = () => {
  //   navigate("contact");
  // };
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
      <Burger ingredients={props.ingredients} />
      {/* <div>
          <Button cName="error" text="Цуцлах" btnOnClick={cancelOrder} />
          <Button
            cName="success"
            text="Хүргэлтийн мэдээлэл оруулах"
            btnOnClick={contact}
          />
        </div> */}
      <ContactData />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.price,
    newOrderStatus: state.orderReducer.newOrder,
  };
};

export default connect(mapStateToProps)(ShippingPage);
