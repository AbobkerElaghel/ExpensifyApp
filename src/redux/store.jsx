import {createStore} from "redux";

const incrementCount = ({incBy = 1} = {}) => ({
    type: "INC",
    incBy
});

const decrementCount = ({decBy = 1} = {}) => ({
    type: "DEC",
    decBy
});

const setCount = ({count = 1} = {}) => ({
   type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET"
});

const store = createStore((state = {count: 0}, {type, incBy = 1,decBy = 1, count = 1} = {}) => {
    switch (type) {
        case "INC":{
            return {
                count: state.count + incBy
            };
        }
        case "DEC":{
            return {
                count: state.count - decBy
            };
        }
        case "RESET":{
            return {
                count: 0
            };
        }
        case "SET":{
            return {
                count
            }
        }
        default:
            return state
    }
});

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementCount());
store.dispatch(decrementCount({decBy:4}));
store.dispatch(resetCount());
store.dispatch(setCount({count:4}));