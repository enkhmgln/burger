import axios from "axios";
import * as actions from "./signUpAction";

export const loginUser = (email, password) => {
  return function (dispatch) {
    const data = {
      email: email,
      password,
      returnSecureToken: true,
    };

    dispatch(loginUserStarted());
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC9l_6Tncm65WBHBxUx5Nic2fCnmQjFjG8`,
        data
      )
      // Амжилттай нэвтэрвэл :
      .then((result) => {
        // localstorage - руу хадгална
        console.log(result.data);
        const token = result.data.idToken;
        const userID = result.data.localId;

        const refreshToken = result.data.refreshToken;
        const expiresIn = result.data.expiresIn;
        // token - ны дуусах хугацааг гаргаж авах
        const expireDate = new Date(new Date().getTime() + expiresIn * 1000);

        localStorage.setItem("token", token);
        localStorage.setItem("userID", userID);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("expireDate", expireDate);
        dispatch(loginUserSuccess(token, userID));
        // Firebase - аас ирсэн token - ны хугацаа дуусахад logou хийнэ.
        dispatch(actions.autoLogoutAfterMillSec(expiresIn * 1000));
      })
      // Нэвтэрхэд алдаа гарвал :
      .catch((err) => {
        dispatch(loginUserFailed(err));
      });
  };
};

export const loginUserStarted = () => {
  return {
    type: "LOGIN_USER_STARTED",
  };
};
export const loginUserSuccess = (token, userID) => {
  return {
    type: "LOGIN_USER_SUCCESSFULLY",
    token: token,
    userID,
  };
};
export const loginUserFailed = (error) => {
  return {
    type: "LOGIN_USER_FAILED",
    error: error.response.data.error.message,
  };
};
