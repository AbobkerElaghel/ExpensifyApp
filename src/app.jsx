import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
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


const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));

