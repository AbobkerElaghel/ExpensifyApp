import React from "react";
import { connect } from "react-redux";
import numeral from 'numeral';
import getFilteredExpenses from "../selectors/expenses.js";
import getExpensesTotal from "../selectors/getExpensesTotal";
import {Link} from "react-router-dom";

//const ExpenseList =
export const ExpenseSummary = props => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.count}</span> {props.count === 1 ? "expenses" : "expense"}, totaling <span>{numeral(props.total / 100).format('$0,0.00')}</span></h1>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>

);

const mapStateToProps = state => {
    const expenses = getFilteredExpenses(state.expenses, state.filters);
    const total = getExpensesTotal(expenses);
    const count = expenses.length;
    return {total, count};
};

export default connect(mapStateToProps)(ExpenseSummary);