import React from "react";
import {removeExpense} from "../actions/expensesAction.js";
import {Link} from "react-router-dom";
const ExpenseListItem = props => (
    <div>
        <Link to={`/edit/${props.id}`}><h3>{props.description}</h3></Link>
        <p>{props.amount} - {new Date(props.createdAt).toLocaleString()}</p>
        <button onClick={() => {
            props.dispatch(removeExpense({id: props.id}));
        }}>Remove</button>
    </div>
);

export default ExpenseListItem;