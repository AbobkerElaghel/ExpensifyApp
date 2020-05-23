import React from "react";
import { shallow } from "enzyme";
import {EditExpensePage} from "../../components/EditExpensePage.jsx";
import expenses from "../fixtures/expenses";

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpenseSpy} removeExpense={removeExpenseSpy} history={historySpy}/>);
});

test('should render Expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
});

test('should handle remove expense', () => {
    wrapper.find("button").simulate('click');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});