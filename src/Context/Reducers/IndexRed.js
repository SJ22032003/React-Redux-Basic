import changePizzaOrder from "./ReducerPizza"
import changeBurgerOrder from "./ReducerBurger"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    changePizzaOrder,
    changeBurgerOrder,
})

export default rootReducer;