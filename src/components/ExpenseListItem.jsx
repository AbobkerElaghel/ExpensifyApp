import React from "react";
import {Link} from "react-router-dom";
const ExpenseListItem = props => (
    <div>
        <Link to={`/edit/${props.id}`}><h3>{props.description}</h3></Link>
        <p>{props.amount} - {new Date(props.createdAt).toLocaleString()}</p>
    </div>
);
export default ExpenseListItem;