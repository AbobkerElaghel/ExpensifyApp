import React from "react";
import {shallow} from "enzyme";
import {ExpenseSummary} from "../../components/ExpenseSummary.jsx";

test('should render ExpenseSummary with 0 expenses correctly', () => {
    const wrapper = shallow(<ExpenseSummary total={0} count={0}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with 0 expenses correctly', () => {
    const wrapper = shallow(<ExpenseSummary total={1} count={69}/>);
    expect(wrapper).toMatchSnapshot();
});

