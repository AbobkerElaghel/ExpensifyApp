import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter.jsx";
import configureStore from "./store/configureStore.js";
import "normalize.css/normalize.css";
import "./style/style.scss";
import "react-dates/lib/css/_datepicker.css"

const store = configureStore();

const JSX = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(JSX, document.getElementById("app"));

