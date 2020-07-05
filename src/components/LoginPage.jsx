import React from "react";
import {startLogin} from "../actions/authAction";
import {connect} from "react-redux";

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout--box">
            <h1 className="box-layout--title">Expensify App</h1>
            <p>Keep track of what you spent with us.</p>
        <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);