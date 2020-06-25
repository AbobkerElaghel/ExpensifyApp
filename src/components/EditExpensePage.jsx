import React from "react";
import ExpenseForm from "./ExpenseForm.jsx";
import {connect} from "react-redux";
import {editExpense, startRemoveExpense} from "../actions/expensesAction";

export class EditExpensePage extends React.Component{
    onSubmit = expense => {
        // props.dispatch(editExpense(props.expense.id, expense));
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push("/");
    };

    removeExpenseHandler = () => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push("/");
    };
    render() {
        return(
            <div>
                <h3>Edit Expense</h3>
                <ExpenseForm expense={this.props.expense}
                             onSubmit={this.onSubmit}
                />
                <button onClick={this.removeExpenseHandler}>Remove</button>
            </div>
        );
    };
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
    editExpense: (id, expense) => {
        dispatch(editExpense(id, expense));
    },
    removeExpense: id => {
        dispatch(startRemoveExpense({id}))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);