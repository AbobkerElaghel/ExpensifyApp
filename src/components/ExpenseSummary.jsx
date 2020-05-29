import React from "react";
import { connect } from "react-redux";
import numeral from 'numeral';
import getFilteredExpenses from "../selectors/expenses.js";
import getExpensesTotal from "../selectors/getExpensesTotal";

//const ExpenseList =
export const ExpenseSummary = props => (
    <h2>
        Viewing {props.count} {props.count === 1 ? "expenses" : "expense"}, totaling {numeral(props.total / 100).format('$0,0.00')}
    </h2>
);

const mapStateToProps = state => {
    const expenses = getFilteredExpenses(state.expenses, state.filters);
    const total = getExpensesTotal(expenses);
    const count = expenses.length;
    return {total, count};
};

export default connect(mapStateToProps)(ExpenseSummary);