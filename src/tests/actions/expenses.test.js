import {addExpense, editExpense, removeExpense, startAddExpense} from "../../actions/expensesAction";
import expenses from "../fixtures/expenses";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import database from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);

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
    const expectedAction = {
        type: "ADD_EXPENSE",
        expense: expenses[0]
    };
    const action = addExpense(expenses[0]);
    expect(action).toEqual(expectedAction);
});

test("should add expense to database and store", done => {
    const store = createMockStore();
    const expenseData = {
        description: "Supplies",
        amount: 7200,
        note: 'some food and stuff i bought from Geant',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("should add expense with default values to database and store", done => {
    const store = createMockStore();
    const defaultExpense = {
        description: '',
        note: '',
        amount :0,
        createdAt: 0
    };
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...defaultExpense
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(defaultExpense);
        done();
    });
});

// test("should setup add expense object with default values", () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//         expense: {
//             id : expect.any(String),
//             description: "",
//             amount : 0,
//             createdAt: 0,
//             note: ""
//         }
//     });
// });