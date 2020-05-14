import {combineReducers, createStore} from "redux";
import expensesReducer from "../reducers/expensesReducer.js"
import filterReducer from "../reducers/filtersReducer.js"

export default () => (
 createStore( combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

