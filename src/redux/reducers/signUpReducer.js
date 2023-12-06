const initialState = {
  saving: false,
  backendError: null,
  token: null,
  userID: null,
};

const signUpReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default signUpReducer;
