import { legacy_createStore } from 'redux';
import counter1Reducer from '../Reducers/Reducer'
 
const store = legacy_createStore(counter1Reducer);
 
export default store;