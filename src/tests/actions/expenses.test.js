import {startSetExpense, setExpenses, addExpense, editExpense, startEditExpense, removeExpense, startAddExpense, startRemoveExpense} from "../../actions/expensesAction";
import expenses from "../fixtures/expenses";
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import database from '../../firebase/firebase';


const createMockStore = configureMockStore([thunk]);
const uid = 'testUid';
const defaultAuthState = {auth : {uid}};

beforeEach(() => {
    const expenseData = {};
    expenses.forEach(({description, id, note, amount, createdAt}) => {
        expenseData[id] = {description, note, amount, createdAt};
    });
    return database.ref(`users/${uid}/expenses`).set(expenseData);
});

test("should setup remove expense object", () => {
    const action = removeExpense({id: "12asd"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "12asd"
    });
});

test("should setup start remove expense and remove from the database", done => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startRemoveExpense({id:1})).then(() => {
        return database.ref(`users/${uid}/expenses`).once('value');
    }).then(snapshot => {
        expect(snapshot.val()[1]).toBeUndefined();
        done();
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

test('should edit expense from firebase', done => {
    const store = createMockStore(defaultAuthState);
    const id = 0;
    const updates = {amount: 101069};

    return store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "EDIT_EXPENSE",
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
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
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("should add expense with default values to database and store", done => {
    const store = createMockStore(defaultAuthState);
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then(snapshot => {
        expect(snapshot.val()).toEqual(defaultExpense);
        done();
    });
});

test("should setup set expenses object with provided data", () => {
    const expectedData = setExpenses(expenses);
    expect(expectedData).toEqual({
        type: "SET_EXPENSES",
        expenses
    });
});

test('should fetch the expenses from firebase', done => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
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