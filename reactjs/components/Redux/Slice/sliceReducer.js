import { combineReducers } from "redux";
import counterSlice from "./sliceAction";

const sliceReducer = combineReducers({
    counter: counterSlice
})

export default sliceReducer