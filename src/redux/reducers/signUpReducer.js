const initialState = {
  saving: false,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_STARTTED":
      return { ...state, saving: true };
    case "SIGNUP_USER_SUCCESS":
      return { ...state, saving: false };
    case "SIGNUP_USER_FAILED":
      return { ...state, saving: false };

    default:
      return state;
  }
};

export default signUpReducer;
