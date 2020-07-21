import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm.jsx";
import expenses from "../fixtures/expenses";
import moment from "moment";

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with error with invalid submit', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit" , {
        preventDefault: () => {}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = "Testing Description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {
        target: {value}
    });
    expect(wrapper.state("description")).toBe(value);
});

test('should set note on text area change', () => {
    const value = "Testing Note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change", {
        target: {value}
    });
    expect(wrapper.state("note")).toBe(value);
});

test('should set amount if valid input', () => {
    const value = "123.42"; //valid input
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state("amount")).toBe(value);
});

test('should not set amount if invalid input', () => {
    let value = "123.423"; //invalid input
    const wrapper = shallow(<ExpenseForm />);
    const amountInput = wrapper.find("input").at(1); // input field for amount

    amountInput.simulate('change', {
        target: {value}
    });
    expect(wrapper.state("amount")).toBe(0);

    value = "Abobker123";
    amountInput.simulate('change', {
        target: {value}
    });
    expect(wrapper.state("amount")).toBe(0);

    value = "123.123";
    amountInput.simulate('change', {
        target: {value}
    });
    expect(wrapper.state("amount")).toBe(0);
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
        amount: expenses[0].amount
    });
});

test('should set new date on date change', () => {
    const now = moment(1000);
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

test('should set calender focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({focused: true});
    expect(wrapper.state("calendarFocused")).toBe(true);
});

