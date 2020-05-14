import React from "react";
import ExpenseForm from "./ExpenseForm.jsx";
import {connect} from "react-redux";
import {editExpense} from "../actions/expensesAction";

const EditExpensePage = props => {
    return(
        <div>
            <h3>Edit Expense</h3>
            <ExpenseForm expense={props.expense}
                         onSumbit={expense => {
                            props.dispatch(editExpense(props.match.params.id, expense));
                            props.history.push("/");
            }}/>
        </div>
    );
};

const mapStateToProps = (state, props) => ({expense: state.expenses.find(expense => expense.id === props.match.params.id)});

export default connect(mapStateToProps)(EditExpensePage);