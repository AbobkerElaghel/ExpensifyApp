import React from "react";
import ExpenseForm from "./ExpenseForm.jsx";
import {connect} from "react-redux";
import {addExpense} from "../actions/expensesAction";

const AddExpensePage = props => (
    <div>
        <h3>Add Expense</h3>
        <ExpenseForm onSumbit={expense => {
            props.dispatch(addExpense(expense));
            props.history.push("/");
        }}/>
    </div>
);

export default connect()(AddExpensePage);