import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./style.module.css";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import ContactData from "../../components/ContactData";

class ShippingPage extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      meat: 2,
      cheese: 2,
    },
  };

  showContactInfo = () => {};
  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px", marginBottom: "1rem" }}>
          <strong>Таны захиалга амттай байна гэдэгт итгэлтэй байна</strong>
        </p>
        <Burger ingredients={this.state.ingredients} />
        {/* <Button text="Илгээх" cName="success" /> */}
        <ContactData />
      </div>
    );
  }
}

export default ShippingPage;
