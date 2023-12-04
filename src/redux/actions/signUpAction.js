import axios from "axios";

export const signUpUser = (email, password) => {
  return function (dispatch) {
    const data = {
      email: email,
      password,
      returnSecureToken: true,
    };

    dispatch(signUpUserStarted());
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC9l_6Tncm65WBHBxUx5Nic2fCnmQjFjG8",
        data
      )
      .then((res) => {
        dispatch(signUpUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(signUpUserFailed(err));
      });
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  };
};

export const signUpUserStarted = () => {
  return {
    type: "SIGNUP_USER_STARTTED",
  };
};
export const signUpUserSuccess = (resultData) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    resultData,
  };
};
export const signUpUserFailed = (error) => {
  return {
    type: "SIGNUP_USER_FAILED",
    error: error,
  };
};
