import {login, logout} from "../../actions/authAction";

test('should generate login action object', () => {
    const uid = 'qwe123';
    const action = login(uid);
    const expectedResult = {
        type: 'LOGIN',
        uid
    };
    expect(action).toEqual(expectedResult);
});

test('should generate logout action object', () => {
    const action = logout();
    const expectedResult = {
        type: 'LOGOUT'
    };
    expect(action).toEqual(expectedResult);
});