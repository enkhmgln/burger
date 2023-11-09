import React from "react";
import css from "./style.module.css";
import Order from "../../components/Order";
import axios from "../../axios";
import Spinner from "../../components/General/Spinner";

class OrderPage extends React.Component {
  state = {
    orders: [],
    spinner: false,
  };
  componentDidMount() {
    this.setState({ spinner: true });
    axios
      .get("/orders.json")
      .then((res) => {
        this.setState({ orders: Object.entries(res.data).reverse() });
      })
      .finally(() => {
        this.setState({ spinner: false });
      });
  }
  render() {
    return (
      <div className={css.OrderPage}>
        <h1>Бүх захиалгууд</h1>
        {this.state.spinner ? (
          <Spinner spinner={this.state.spinner} />
        ) : (
          this.state.orders.map((el) => {
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
      </div>
    );
  }
}

export default OrderPage;
