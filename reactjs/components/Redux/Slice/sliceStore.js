import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./sliceReducer";

const store=configureStore({
reducer:sliceReducer
})

export default store