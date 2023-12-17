import axios from "../../axios-orders";

export const getOrders = (userID) => {
  // getState function dispatch-тай хамт орж ирдэг ба state  - ийг буцааадаг функц
  return function (dispatch, getState) {
    // ЗАХИАЛГЫГ ТАТАЖ АВАХ ГЭДГИЙГ МЭДЭГДЭНЭ
    // ЭНИЙГ ХҮЛЭЭЖ АВААД SPINNER ажиллаж эхэлнэ
    dispatch(getOrdersStart());

    const token = getState().loginSignUpReducer.token;

    axios
      .get(`/orders.json?&auth=${token}&orderBy="userID"&equalTo="${userID}"`)
      .then((res) => {
        const receivedOrders = Object.entries(res.data).reverse();
        dispatch(getOrdersSuccess(receivedOrders));
      })
      .catch((err) => {
        dispatch(getOrdersFailed(err));
      });
  };
};

export const getOrdersStart = () => {
  return {
    type: "GET_ORDERS_START",
  };
};

export const getOrdersSuccess = (receivedOrders) => {
  return {
    type: "GET_ORDERS_SUCCESS",
    orders: receivedOrders,
  };
};

export const getOrdersFailed = (error) => {
  return {
    type: "GET_ORDERS_FAILED",
    error: error,
  };
};

// Захиалгыг хадгалах хэсэг
export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    // Spinner эргэлдүүлнэ .
    dispatch(saveOrderStart());
    const token = getState().loginSignUpReducer.token;
    // Бааз руу Order-ийг хадгалах
    axios
      .post(`/orders.json?auth=${token}`, newOrder)
      .then((res) => {
        dispatch(saveOrderSuccess());
      })
      .catch((err) => {
        dispatch(saveOrderFailed(err));
      });
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_STARTED",
  };
};

export const saveOrderSuccess = () => {
  return {
    type: "ORDER_SAVED_SUCCESSFULLY",
  };
};
export const saveOrderFailed = (error) => {
  return {
    type: "ORDER_SAVED_FAILED",
    error: error,
  };
};
