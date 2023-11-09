import React from "react";
import css from "./style.module.css";
import Button from "../General/Button";
class ContactData extends React.Component {
  state = {
    dun: 0,
    name: "",
    street: "",
    city: "",
  };
  getName = (event) => {
    this.setState({ name: event.target.value });
  };
  getStreet = (event) => {
    this.setState({ street: event.target.value });
  };
  getCity = (event) => {
    this.setState({ city: event.target.value });
  };
  render() {
    return (
      <div className={css.ContactData}>
        <input
          onChange={this.getName}
          type="text"
          name="mame"
          placeholder="Таны нэр"
        />
        <input
          onChange={this.getStreet}
          type="text"
          name="street"
          placeholder="Таны хаяг"
        />
        <input
          onChange={this.getCity}
          type="text"
          name="city"
          placeholder="Таны хот"
        />
        <Button text="ЗАХИАЛГЫГ ЦУЦЛАХ" cName="error" />
        <Button text="Илгээх" cName="success" />
      </div>
    );
  }
}

export default ContactData;
