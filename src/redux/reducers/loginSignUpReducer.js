const initialState = {
  saving: false,
  logginIn: false,
  backendError: null,
  token: null,
  userID: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_STARTED":
      return { ...state, saving: true };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.resultData.idToken,
        userID: action.resultData.localId,
      };
    case "SIGNUP_USER_FAILED":
      return { ...state, saving: false, backendError: action.error };
    case "LOGIN_USER_STARTED":
      return {
        ...state,
        logginIn: true,
      };
    case "LOGIN_USER_SUCCESSFULLY":
      return {
        ...state,
        logginIn: false,
        token: action.resultData.idToken,
        userID: action.resultData.localId,
      };
    case "LOGIN_USER_FAILED":
      return {
        ...state,
        logginIn: false,
        backendError: action.error,
      };
    case "LOGOUT":
      return {
        ...state,
        backendError: null,
        token: null,
        userID: null,
      };
    default:
      return state;
  }
};

export default reducer;
