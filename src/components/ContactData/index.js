import React from "react";
import {connect} from 'react-redux'

import css from "./style.module.css";
import Button from "../General/Button";
import axios from "../../axios";
import Spinner from "../General/Spinner";

class ContactData extends React.Component {
  state = {
    name: null,
    street: null,
    city: null,
    spinner : false
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
    axios.post('/orders.json' , order).then(this.setState({spinner:true}))
    .catch((err)=> {
      console.log(err)
    }).finally(()=> {
      this.setState({spinner:false});

    })


  }
  render() {
    return (
      this.state.spinner ? <Spinner spinner={this.state.spinner}/> : (
        <div className={css.ContactData}>
          <h4>Нийт үнэ : {this.props.price}₮ </h4>
          <input
            onChange={this.getName}
            type="text"
            name="name"
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
          <Button text="ИЛГЭЭХ" cName="success" btnOnClick={this.saveOrder} />
        </div>
      )
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
