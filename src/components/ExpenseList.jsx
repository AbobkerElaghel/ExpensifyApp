import React from "react";
import ExpenseListItem from "./ExpenseListItem.jsx";
import { connect } from "react-redux";
import getFilteredExpenses from "../selectors/expenses.js";
//const ExpenseList =
export const ExpenseList = props => (
    <div className="content-container">
        <div className='list-header'>
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        {
            props.expenses.length === 0 ? (
                <p>There is no expenses</p>
            ) : (
                props.expenses.map(expense => <ExpenseListItem {...expense} key={expense.id} dispatch={props.dispatch}/>)
            )
        }
    </div>
);

const mapStateToProps = state => ({expenses: getFilteredExpenses(state.expenses, state.filters)});

export default connect(mapStateToProps)(ExpenseList);