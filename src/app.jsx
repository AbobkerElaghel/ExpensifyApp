import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "normalize.css/normalize.css";
import "./style/style.scss";

const ExpenseDashboardPage = () => (
    <div>
        This is ExpenseDashboardPage
    </div>
);

const AddExpensePage = () => (
    <div>
        This is AddExpensePage
    </div>
);

const EditExpensePage = () => (
    <div>
        This is EditExpensePage
    </div>
);

const HelpPage = () => (
    <div>
        This is HelpPage
    </div>
);

const NotFoundPage = () => (
    <div>
        Page Not Found
    </div>
);

const Header = () => (
    <header>
        <h1>ExpensifyApp</h1>
    </header>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

