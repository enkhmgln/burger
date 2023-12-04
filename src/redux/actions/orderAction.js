import axios from "../../axios";

export const getOrders = () => {
  return function (dispatch) {
    // ЗАХИАЛГЫГ ТАТАЖ АВАХ ГЭДГИЙГ МЭДЭГДЭНЭ
    // ЭНИЙГ ХҮЛЭЭЖ АВААД SPINNER ажиллаж эхэлнэ
    dispatch(getOrdersStart());
    axios
      .get("/orders.json")
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
  return function (dispatch) {
    // Spinner эргэлдүүлнэ .
    dispatch(saveOrderStart());
    // Бааз руу Order-ийг хадгалах
    axios
      .post("/orders.json", newOrder)
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
