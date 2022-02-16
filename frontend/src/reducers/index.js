import exampleReducer from "./example";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    example:exampleReducer
})

export default allReducers