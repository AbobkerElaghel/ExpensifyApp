import React from "react";
import { shallow } from "enzyme";
import {LoginPage} from '../../components/LoginPage.jsx'

test("should render LoginPage component correctly", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startLogin action", () => {
    const startLoginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLoginSpy).toBeCalled();
});