import React from "react";
import { connect } from "react-redux";

import css from "./style.module.css";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Spinner from "../../components/General/Spinner";
import { Navigate } from "react-router-dom";

const ShippingPage = (props) => {
  // const navigate = useNavigate();
  // const cancelOrder = () => {
  //   navigate("/");
  // };
  // const contact = () => {
  //   navigate("contact");
  // };
  console.log(props);
  return props.newOrderStatus.saving ? (
    <Spinner />
  ) : (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "24px", marginBottom: "1rem" }}>
        {!props.userID && <Navigate to={"/login"} replace />}
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
    userID: state.loginSignUpReducer.userID,
  };
};

export default connect(mapStateToProps)(ShippingPage);
