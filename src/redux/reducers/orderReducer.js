const initialState = {
  orders: [
    [
      "-Nkm6UCrk6bGBWmpvCO3",
      {
        address: {
          city: "Ulaanbaatar",
          name: "Энх-амгалан",
          street: "10r horoolol , 32r bair",
        },
        dun: 3300,
        orts: { bacon: 1, cheese: 1, meat: 1, salad: 1 },
      },
    ],
  ],
  spinner: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "GET_ORDERS") {    
    return {
      ...state,
      spinner : true,
    }
  }
  return state;
};

export default reducer;
