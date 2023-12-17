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
      // Амжилттай бүртгүүлвэл :
      .then((result) => {
        // localstorage - руу хадгална.
        const token = result.data.idToken;
        const userID = result.data.localId;
        localStorage.setItem("token", token);
        localStorage.setItem("userID", userID);
        dispatch(signUpUserSuccess(token, userID));
      })
      // Бүртгүүлэхэд алдаа гарвал :
      .catch((err) => {
        dispatch(signUpUserFailed(err));
      });
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  };
};

export const signUpUserStarted = () => {
  return {
    type: "SIGNUP_USER_STARTED",
  };
};
export const signUpUserSuccess = (token, userID) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    token,
    userID,
  };
};
export const signUpUserFailed = (error) => {
  return {
    type: "SIGNUP_USER_FAILED",
    error: error.response.data.error.message,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userID");
  localStorage.removeItem("expireDate");
  localStorage.removeItem("refreshToken");

  return {
    type: "LOGOUT",
  };
};

export const autoLogoutAfterMillSec = (time) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(logout());
    }, time);
  };
};
