import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { startSetExpense } from './actions/expensesAction.js';
import AppRouter from "./router/AppRouter.jsx";
import configureStore from "./store/configureStore.js";
import "normalize.css/normalize.css";
import "./style/style.scss";
import "react-dates/lib/css/_datepicker.css"
import "./firebase/firebase.js";

const store = configureStore();

const JSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p> Loading... </p>, document.getElementById("app"));

store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(JSX, document.getElementById("app"));
});


