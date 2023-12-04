export const getOrders = () => {
    // ЗАХИАЛГЫГ ТАТАЖ АВАХ ГЭДГИЙГ МЭДЭГДЭНЭ
    // ЭНИЙГ ХҮЛЭЭЖ АВААД SPINNER ажилна
    return function ( dispatch) {
        dispatch(getOrdersStart)
    }
}

export const getOrdersStart = () => {
    return {
        type: "GET_ORDERS_START"
    }
}

export const getOrdersSuccess = () => {
    return {
        type: 'GET_ORDERS_SUCCESS'
    }
}

export const getOrdersError = () => {
    return {
        type : 'GET_ORDERS_FAILED'
    }
}

