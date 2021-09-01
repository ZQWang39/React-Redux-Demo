import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./islogged";

const reducers = combineReducers({
    counter: counterReducer, 
    islogged: loggedReducer, 
});

export default reducers;