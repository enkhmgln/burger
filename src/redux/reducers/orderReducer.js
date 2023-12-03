const initialState = {
    orders: [],
}


const reducer = (state = initialState,action) =>  {
    if(action.type == 'GET_ORDERS') {
        return state;
    }
    return state;
}

export default reducer