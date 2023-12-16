import axios from "axios";

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
      .then((res) => {
        dispatch(loginUserSuccess(res.data));
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
export const loginUserSuccess = (resultData) => {
  return {
    type: "LOGIN_USER_SUCCESSFULLY",
    resultData : resultData
  };
};
export const loginUserFailed = (error) => {
  return {
    type: "LOGIN_USER_FAILED",
    error: error.response.data.error.message
  };
};
