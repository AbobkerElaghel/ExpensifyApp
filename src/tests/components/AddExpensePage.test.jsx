import React from "react";
import { shallow } from "enzyme";
import {AddExpensePage} from "../../components/AddExpensePage.jsx";
import expenses from "../fixtures/expenses";
// import moment from "moment";

let AddExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    AddExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={AddExpenseSpy} history={historySpy}/>);
});

test('should render add expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle submit', () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
    expect(AddExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
});