import filtersReducer from "../../reducers/filtersReducer";
import moment from "moment";

test("should setup default filters values", () => {
    const state = filtersReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should setup sortBy to amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state).toEqual({
        text:"",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should setup sortBy to date", () => {
    const currentState ={
        text: "",
        startDate: undefined,
        endDate: undefined,
        sortBy: "amount"
    };
    const state = filtersReducer(currentState, {type: "SORT_BY_DATE"});
    expect(state.sortBy).toBe("date");
});

test("should setup setTextFilter to date with no previous state", () => {
    const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER", text: "Testing"});
    expect(state.text).toBe("Testing");
});

test("should setup setTextFilter to date with previous state", () => {
    const currentState = {
        text: "Testing1",
        startDate: undefined,
        endDate: undefined,
        sortBy: "date"
    };
    const state = filtersReducer(currentState, {type: "SET_TEXT_FILTER", text: "Testing2"});
    expect(state.text).toBe("Testing2");
});

test("should setup setStartDate", () => {
    const state = filtersReducer(undefined, {type: "SET_START_DATE", startDate: moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test("should setup setEndDate", () => {
    const state = filtersReducer(undefined, {type: "SET_END_DATE", endDate: moment(0)});
    expect(state.endDate).toEqual(moment(0));
});