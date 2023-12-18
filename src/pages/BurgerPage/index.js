import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Burger from "../../components/Burger";
import css from "./style.module.css";
import BurgerControlers from "../../components/BuildControlers";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);

  const showConfirmModal = () => {
    setConfirmOrder(true);
  };
  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  return (
    <div className={css.container}>
      {props.userID == null ? <Navigate to={"/login"} replace /> : null}
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

const mapStateToProps = (state) => {
  return {
    userID: state.loginSignUpReducer.userID,
  };
};

export default connect(mapStateToProps)(BurgerPage);
