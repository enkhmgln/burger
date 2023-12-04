const initialState = {
  orders: [],
  spinner: false,
  error: null,
  newOrder: {
    saving: false,
    finished: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ORDERS_START":
      return {
        ...state,
        spinner: true,
      };
    case "GET_ORDERS_SUCCESS":
      return {
        ...state,
        spinner: false,
        orders: action.orders,
      };
    case "GET_ORDERS_FAILED":
      return {
        ...state,
        spinner: false,
        error: action.error,
      };
    case "SAVE_ORDER_STARTED":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: true,
        },
      };
    case "ORDER_SAVED_SUCCESSFULLY":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          finished: true,
          saving: false,
          error: null,
        },
      };
    case "ORDER_SAVED_FAILED":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
          finished: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default reducer;
