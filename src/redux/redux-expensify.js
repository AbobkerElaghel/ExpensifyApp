// import {createStore, combineReducers} from "redux";
// import {v4 as uuid} from "uuid";
//
// // Default Values for the Reducers
// // const expensesReducerDefaultState = [];
// // const filterReducerDefaultState = {text: "", sortBy: "date", startDate: undefined, endDate: undefined};
//
// // Actions
// const addExpense = ({description = "", note = "", amount = 0, createdAt = 0} = {}) => ({type: "ADD_EXPENSE", expense: {id: uuid(), description, note, amount, createdAt}});
// const removeExpense = ({id} = {}) => ({type: "REMOVE_EXPENSE", id});
// const editExpense = (id, updates) => ({type: "EDIT_EXPENSE", id, updates});
// const setTextFilter = text => ({type: "SET_TEXT_FILTER", text});
// const sortByAmount = () => ({type: "SORT_BY", sortBy: "amount"});
// const sortByDate = () => ({type: "SORT_BY", sortBy: "date"});
// const setStartDate = startDate => ({type: "SET_START_DATE", startDate});
// const setEndDate = endDate => ({type: "SET_END_DATE", endDate});
//
//
// //selectors
// // const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => (expenses.filter(expense => {
// //     const startDateMatch = typeof expense.startDate !== "number" || expense.createdAt >= startDate;
// //     const endDateMatch = typeof expense.endDate !== "number" || expense.createdAt <= endDate;
// //     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
// //     return startDateMatch && endDateMatch && textMatch;
// // }).sort((a, b) => {
// //     if(sortBy === "amount"){
// //         return b.amount - a.amount;
// //     } else if (sortBy === "date") {
// //         return b.createdAt - a.createdAt;
// //     }}));
//
//
// // Reducers
// // const expensesReducer = (state = expensesReducerDefaultState, action) => {
// //     switch (action.type) {
// //         case "ADD_EXPENSE":{
// //             return [...state, action.expense]
// //         }
// //         case "REMOVE_EXPENSE":{
// //             return state.filter(({id}) => id !== action.id)
// //         }
// //         case "EDIT_EXPENSE":{
// //             return state.map( expense => {
// //                 if (expense.id === action.id){
// //                     return {
// //                         ...expense,
// //                         ...action.updates
// //                     }
// //                 } else {
// //                     return expense;
// //                 }
// //             });
// //         }
// //         default:{
// //             return state;
// //         }
// //     }
// // };
//
// // const filterReducer = (state = filterReducerDefaultState, action) => {
// //     switch (action.type) {
// //         case "SET_TEXT_FILTER":{
// //          return {
// //              ...state,
// //              text: action.text
// //          }
// //         }
// //         case "SORT_BY":{
// //             return {
// //                 ...state,
// //                 sortBy: action.sortBy
// //             }
// //         }
// //         case "SET_START_DATE":{
// //             return {
// //                 ...state,
// //                 startDate : action.startDate
// //             }
// //         }
// //         case "SET_END_DATE":{
// //             return {
// //                 ...state,
// //                 endDate: action.endDate
// //             }
// //         }
// //         default:{
// //             return state;
// //         }
// //     }
// // };
//
// // Store
// const store = createStore(combineReducers({
//     expenses: expensesReducer,
//     filter: filterReducer
// }));
//
//  const demosState = {
//      expenses: [{
//          id: "qweasd",
//          description: "January Rent",
//          note: "this was the final payment for the address",
//          amount: 54500,
//          createdAt: 0
//      }],
//      filter: {
//         text: "rent",
//         sortBy: "amount",
//         startDate: undefined,
//         endDate: undefined
//      }
//  };
//
// store.dispatch(addExpense({description:"Abobker's Expense", amount: 250, createdAt:1000, note: "1"}));
// store.dispatch(addExpense({description:"Bakers", amount: 200, createdAt:11111, note: "3"}));
// store.dispatch(addExpense({description:"Bakers", amount: 200, createdAt:11111, note: "2"}));
// store.dispatch(addExpense({description:"Abobker's Expense", amount: 350, createdAt:4900, note: "4"}));
//
//
// const state = store.getState();
// console.log(state)
// console.log(getVisibleExpenses(state.expenses, state.filter));