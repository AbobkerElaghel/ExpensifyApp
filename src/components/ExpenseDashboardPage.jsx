import React from "react";
import ExpenseList from "./ExpenseList.jsx"
import ExpenseListFilter from "./ExpenseListFilter.jsx";
import ExpenseSummary from "./ExpenseSummary.jsx";

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary/>
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;