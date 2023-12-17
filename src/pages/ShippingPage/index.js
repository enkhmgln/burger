import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Spinner from "../../components/General/Spinner";
// import Button from "../../components/General/Button";

class ShippingPage extends React.Component {
  render() {
    return this.props.newOrderStatus.saving ? (
      <Spinner />
    ) : (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px", marginBottom: "1rem" }}>
          <strong>Таны захиалга амттай байна гэдэгт итгэлтэй байна</strong>
        </p>
        <p style={{ fontSize: "24px", marginBottom: "1rem" }}>
          <strong> {this.props.price}₮</strong>
        </p>
        <Burger ingredients={this.props.ingredients} />
        {/* <div>
          <Button cName="error" text="Цуцлах" />
          <Button cName="success" text="Хүргэлтийн мэдээлэл оруулах" />
        </div> */}
        <ContactData />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.price,
    newOrderStatus: state.orderReducer.newOrder,
  };
};

export default connect(mapStateToProps)(ShippingPage);
