import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem.jsx";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";

test('should render Expense list item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});