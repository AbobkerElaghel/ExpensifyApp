import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import expensesReducer from "../reducers/expensesReducer.js"
import filterReducer from "../reducers/filtersReducer.js"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;

export default () => (
 createStore( combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}), composeEnhancers(applyMiddleware(thunk)))
);

