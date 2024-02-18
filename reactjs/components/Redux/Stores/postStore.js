// import { legacy_createStore, applyMiddleware,compose } from "redux";
// import { thunk } from "redux-thunk";
// import postReducer from "../Reducers/postReducer";


// const initialState={}
// const middleware=[thunk]

// const store=legacy_createStore(
//     postReducer,
//     initialState,
//     compose(
//         applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS.EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );
 
// export default store;


import { legacy_createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk";
import rootReducer from '../Reducers/index'

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
