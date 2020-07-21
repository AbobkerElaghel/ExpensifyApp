import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expensesReducer.js"
import filterReducer from "../reducers/filtersReducer.js"
import authReducer from "../reducers/authReducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;

export default () => (
 createStore( combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
    auth: authReducer
}), composeEnhancers(applyMiddleware(thunk)))
);

