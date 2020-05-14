import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter.jsx";
import configureStore from "./store/configureStore.js";
import "normalize.css/normalize.css";
import "./style/style.scss";
import { addExpense } from "./actions/expensesAction";
import moment from "moment";

console.log(moment("2013-02-25T00:00:00.000").isSameOrAfter(moment("2013-01-21T00:00:00.000"))); //Starting
console.log(moment("2013-02-1T00:00:00.000").isSameOrBefore(moment("2013-01-21T00:00:00.000"))); //Starting

const store = configureStore();

store.dispatch( addExpense({amount: 90,description:"Rented to 1", note: "Whats up",createdAt: Date.now() + 2000000}));
store.dispatch( addExpense({amount: 100,description:"Rented to 2", note: "Whats up",createdAt: Date.now() + 1000000}));
store.dispatch( addExpense({amount: 80,description:"Rented to 3", note: "fine up",createdAt: Date.now() + 300000}));
store.dispatch( addExpense({amount: 60,description:"Rented to 4", note: "Gheltr up",createdAt: Date.now()  + 4000000}));

const JSX = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(JSX, document.getElementById("app"));

