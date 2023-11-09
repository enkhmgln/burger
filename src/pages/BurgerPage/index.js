import React from "react";
import Burger from "../../components/Burger";
import css from "./style.module.css";
import BurgerControlers from "../../components/BuildControlers";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/General/Spinner";

class BurgerBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0,
      },
      INGREDIENT_NAMES: {
        salad: "Салад",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        bacon: "Гахайн мах",
      },
      isPurchasing: false,
      price: 1000,
      INGREDIENT_PRICE: { salad: 500, bacon: 600, meat: 850, cheese: 350 },
      confirmOrder: false,
      spinner: false,
    };
  }
  showConfirmOrder = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmOrder = () => {
    this.setState({ confirmOrder: false });
  };
  onContinue = () => {
    this.closeConfirmOrder();

    const order = {
      orts: this.state.ingredients,
      dun: this.state.price,
      address: {
        name: "Энхээ",
        city: "Уб хот , Сонгино хайрхан дүүрэг",
        street: "10 хороолол",
      },
    };
    this.setState({ spinner: true });
    axios
      .post("/orders.json", order)
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ spinner: false });
      });
  };
  ortsNemeh = (ortsType) => {
    this.setState({
      ingredients: {
        ...this.state.ingredients,
        [ortsType]: this.state.ingredients[ortsType] + 1,
      },
      price: this.state.price + this.state.INGREDIENT_PRICE[ortsType],
      isPurchasing: true,
    });
  };
  ortsHasah = (ortsType) => {
    if (this.state.ingredients[ortsType] > 0) {
      const newPrice = this.state.price - this.state.INGREDIENT_PRICE[ortsType];
      this.setState({
        ingredients: {
          ...this.state.ingredients,
          [ortsType]: this.state.ingredients[ortsType] - 1,
        },
        price: newPrice,
        isPurchasing: newPrice > 1000,
      });
    }
  };
  render() {
    const disabledButton = { ...this.state.ingredients };
    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0;
    }
    return (
      <div className={css.container}>
        <Modal
          showConfirmOrder={this.showConfirmOrder}
          closeConfirmOrder={this.closeConfirmOrder}
          confirmOrder={this.state.confirmOrder}
        >
          {this.state.spinner ? (
            <Spinner />
          ) : (
            <OrderSummary
              onContinue={this.onContinue}
              closeConfirmOrder={this.closeConfirmOrder}
              INGREDIENT_NAMES={this.state.INGREDIENT_NAMES}
              price={this.state.price}
              ingredients={this.state.ingredients}
            />
          )}
        </Modal>
        <Spinner spinner={this.state.spinner} />

        {/* {this.state.spinner ? (
          <Spinner />
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "1rem",
            }}
          >
            Сүүлд захиалга хийсэн хаяг: {this.state.lastCustomerDistrict}
          </p>
        )} */}
        <Burger ingredients={this.state.ingredients} />

        <BurgerControlers
          showConfirmOrder={this.showConfirmOrder}
          INGREDIENT_NAMES={this.state.INGREDIENT_NAMES}
          isPurchasing={!this.state.isPurchasing}
          price={this.state.price}
          disabledButton={disabledButton}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
