import React from "react";
import { shallow } from "enzyme";
import {Logout} from '../../components/Logout.jsx'

test("should render Logout component correctly", () => {
    const wrapper = shallow(<Logout />);
    expect(wrapper).toMatchSnapshot();
});

test("should call startLogout action", () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Logout startLogout={startLogoutSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toBeCalled();
});