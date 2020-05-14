import React from "react";
import ExpenseListItem from "./ExpenseListItem.jsx";
import { connect } from "react-redux";
import getFilteredExpenses from "../selectors/expenses.js";
//const ExpenseList =
const ExpenseList = props => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map(expense => (<ExpenseListItem {...expense} key={expense.id} dispatch={props.dispatch}/>))}
    </div>
);

const mapStateToProps = (state) => ({expenses: getFilteredExpenses(state.expenses, state.filters)});

export default connect(mapStateToProps)(ExpenseList);