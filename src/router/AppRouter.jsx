import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import Header from "../components/Header.jsx";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.jsx";
import AddExpensePage from "../components/AddExpensePage.jsx";
import EditExpensePage from "../components/EditExpensePage.jsx";
import HelpPage from "../components/HelpPage.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import LoginPage from "../components/LoginPage.jsx";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();

const AppRouter = () => (
    <Router basename="./" history={history}>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/dashboard" component={ExpenseDashboardPage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export {history, AppRouter as default};

