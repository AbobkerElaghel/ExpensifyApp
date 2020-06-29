import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { startSetExpense } from './actions/expensesAction.js';
import AppRouter, {history} from "./router/AppRouter.jsx";
import configureStore from "./store/configureStore.js";
import "normalize.css/normalize.css";
import "./style/style.scss";
import "react-dates/lib/css/_datepicker.css"
import "./firebase/firebase.js";
import {firebase} from "./firebase/firebase";
import {login, logout} from "./actions/authAction";

const store = configureStore();

const JSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(JSX, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p> Loading... </p>, document.getElementById("app"));


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});



