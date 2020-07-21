import moment from "moment";

// get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => (expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
    if(sortBy === "amount"){
        return b.amount - a.amount;
    } else if (sortBy === "date") {
        return b.createdAt - a.createdAt;
    }}));
