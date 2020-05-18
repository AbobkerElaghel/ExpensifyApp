import {addExpense, editExpense, removeExpense} from "../../actions/expensesAction";

test("should setup remove expense object", () => {
    const action = removeExpense({id: "12asd"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "12asd"
    });
});

test("should setup edit expense object", () => {
    const action = editExpense("123qwe", {description: "hello", amount: 123.123});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123qwe",
        updates: {
            description: "hello",
            amount: 123.123
        }
    });
});

test("should setup add expense object with provided values", () => {
    const action = addExpense({description: "addExpenseTest", amount: 2100.50, createdAt: 1589506619854, note:"Testing"});
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id : expect.any(String),
            description: "addExpenseTest",
            amount : 2100.5,
            createdAt: 1589506619854,
            note: "Testing"
        }
    });
});

test("should setup add expense object with default values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id : expect.any(String),
            description: "",
            amount : 0,
            createdAt: 0,
            note: ""
        }
    });
});