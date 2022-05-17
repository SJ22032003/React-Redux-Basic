import rootReducer from "./Context/Reducers/IndexRed";
import {createStore} from "redux"

const store = createStore(rootReducer);

export default store;