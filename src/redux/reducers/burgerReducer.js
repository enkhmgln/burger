const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },
  ingredientNames: {
    salad: "Салад",
    cheese: "Бяслаг",
    meat: "Үхрийн мах",
    bacon: "Гахайн мах",
  },
  price: 1000,
  isPurchasing: false,
};
const INGREDIENT_PRICE = { salad: 500, bacon: 600, meat: 850, cheese: 350 };
const burgerReducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENT") {
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },
      price: state.price + INGREDIENT_PRICE[action.ortsNer],
      isPurchasing: true,
    };
  } else if (action.type === "REMOVE_INGREDIENT") {
    const newPrice = state.price - INGREDIENT_PRICE[action.ortsNer];
    return {
      ...state,
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },
      price: newPrice,
      isPurchasing: newPrice > 1000,
    };
  }
  return state;
};

export default burgerReducer;
