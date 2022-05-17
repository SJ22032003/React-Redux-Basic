const intialState = 0;

const changePizzaOrder = (state = intialState, action) => {
  switch (action.type) {
    case "ADDPIZZA":
      return state + 1;
    case "REVPIZZA":
      return state - 1;
    default:
      return state;
  }
};

export default changePizzaOrder;
