import React, { useState } from "react";
import Burger from "../../components/Burger";
import css from "./style.module.css";
import BurgerControlers from "../../components/BuildControlers";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const BurgerPage = () => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };
  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  return (
    <div className={css.container}>
      <Modal
        showConfirmModal={showConfirmModal}
        closeConfirmModal={closeConfirmModal}
        confirmOrder={confirmOrder}
      >
        <OrderSummary closeConfirmModal={closeConfirmModal} />
      </Modal>
      <Burger />
      <BurgerControlers showConfirmModal={showConfirmModal} />
    </div>
  );
};

export default BurgerPage;
