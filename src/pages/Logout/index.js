import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import * as actions from "../../redux/actions/signUpAction";
import { useEffect } from "react";

const Logout = (props) => {
  useEffect(() => {
    props.logout();
  }, []);
  return <Navigate to="/login" />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(actions.logout());
    },
  };
};

export default connect(null, mapDispatchToProps)(Logout);
