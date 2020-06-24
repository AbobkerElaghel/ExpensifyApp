import expensesReducer from "../../reducers/expensesReducer";
import expenses from "../fixtures/expenses.js";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test('should remove an expense by id', () => {
   const state = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: expenses[1].id});
   expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove an expense if no id is found', () => {
    const state = expensesReducer(expenses, {type: "REMOVE_EXPENSE", id: "-1"});
    expect(state).toEqual([expenses[0],expenses[1], expenses[2]]);
});

test("should add an expense", () => {
    const expense = expenses[0];
    const state = expensesReducer(undefined, {type: "ADD_EXPENSE", expense});
    expect(state).toEqual([expense]);
});

test("should edit an expense if id found", () => {
    const state = expensesReducer(expenses, {type: "EDIT_EXPENSE", id: "1", updates: {description: "Testing"} });
    const expense = state.find(expense => expense.id === "1");
    expect(expense.description).toEqual("Testing");
});

test("should edit an expense if id not found", () => {
    const state = expensesReducer(expenses, {type: "EDIT_EXPENSE", id: "-1", updates: {description: "Testing"} });
    expect(expenses).toStrictEqual(state);
});

test("should set expenses", () => {
    const action = {
      type: "SET_EXPENSES",
      expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});