import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from "../../actions/filtersAction";
import moment from "moment";
import {expect} from "@jest/globals";

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});

test("should generate a setTextFilter object with parameter", () => {
    const action = setTextFilter("Testing");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Testing"
    });
});

test("should generate a setTextFilter object with default value", () => {
    const action = setTextFilter("");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

test("should generate a sortByDate object", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("should generate a sortByAmount object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test("should generate a setStartDate object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test("should generate a setEndDate object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});
