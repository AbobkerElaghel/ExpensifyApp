import React from "react";
import { shallow } from "enzyme";
import {LoginPage} from '../../components/LoginPage.jsx'

test("should render LoginPage component correctly", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});