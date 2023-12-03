import React from "react";
import {connect} from 'react-redux'

import css from "./style.module.css";
import Button from "../General/Button";
import axios from "../../axios";

class ContactData extends React.Component {
  state = {
    name: null,
    street: null,
    city: null,
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

  saveOrder = () => {
    const order = {
      orts: this.props.ingredients,
      dun: this.props.price,
      address: {
        name: this.state.name,
        city: this.state.city,
        street: this.state.street,
      },
    };
    axios.post('/orders.json' , order)
    .catch((err)=> {
      console.log(err)
    })


  }
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
        <Button text="Илгээх" cName="success" btnOnClick={this.saveOrder} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    price : state.price
  }
}

export default connect(mapStateToProps)(ContactData);
