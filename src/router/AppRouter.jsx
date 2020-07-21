import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage.jsx";
import AddExpensePage from "../components/AddExpensePage.jsx";
import EditExpensePage from "../components/EditExpensePage.jsx";
import HelpPage from "../components/HelpPage.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import LoginPage from "../components/LoginPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";
const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                {/*<Route path="/help" component={HelpPage}/>*/}
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export {history, AppRouter as default};

