import React from "react";
import { shallow } from "enzyme";
import {ExpenseListFilter} from "../../components/ExpenseListFilter";
import {filters, altFilters} from "../fixtures/filters";
import moment from "moment";

let wrapper, setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(<ExpenseListFilter
        filters={filters}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate} />
        );
});

test("should render ExpenseListFilter correctly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilter with alt data correctly", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = "should handle text Test";
    wrapper.find("input").simulate('change', {target: { value }});
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle date change', () => {
    const startDate = moment().add(1,"days");
    const endDate = moment().add(10, "days");
    wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle on focus change', () => {
    const value = "startDate";
    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(value);
    expect(wrapper.state("calenderFocused")).toBe(value);
});

test('should sort by date', () => {
    const value = "date";
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find("select").simulate('change', {target: {value}});
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = "amount";
    wrapper.find("select").simulate('change', {target: {value}});
    expect(sortByAmount).toHaveBeenCalled();
});