import React from "react";
import Burger from "../../components/Burger";
import css from "./style.module.css";
import BurgerControlers from "../../components/BuildControlers";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

class BurgerPage extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmOrder: false,
    };
  }
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div className={css.container}>
        <Modal
          showConfirmModal={this.showConfirmModal}
          closeConfirmModal={this.closeConfirmModal}
          confirmOrder={this.state.confirmOrder}
        >
          <OrderSummary closeConfirmModal={this.closeConfirmModal} />
        </Modal>
        <Burger />
        <BurgerControlers showConfirmModal={this.showConfirmModal} />
      </div>
    );
  }
}

export default BurgerPage;
