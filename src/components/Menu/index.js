import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as actions from "../../redux/actions/signUpAction";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = (props) => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await props.logout();
    navigate("/login");
  };

  return (
    <>
      <ul className={css.Menu}>
        {!props.userID ? (
          <>
            <MenuItem link="/login" text="НЭВТРЭХ" />
            <MenuItem link="/signup" text="БҮРТГҮҮЛЭХ" />
          </>
        ) : (
          <>
            <MenuItem link="/" text="ШИНЭ ЗАХИАЛГА" />
            <MenuItem link="/orders" text="ЗАХИАЛГУУД" />
            <MenuItem link="/login" text="ГАРАХ" onClick={logoutHandler} />
          </>
        )}
      </ul>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    userID: state.loginSignUpReducer.userID,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(actions.logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
