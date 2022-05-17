const intialState = 0;

const changeBurgerOrder = (state = intialState, action) => {
  switch (action.type) {
    case "ADDBURGER":
      return state + 1;
    case "REVBURGER":
      return state - 1;
    default:
      return state;
  }
};

export default changeBurgerOrder;
