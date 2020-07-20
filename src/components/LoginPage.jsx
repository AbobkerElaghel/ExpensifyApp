import React from "react";
import {startGoogleLogin, startFacebookLogin} from "../actions/authAction";
import {connect} from "react-redux";
import GoogleButton from "./GoogleButton.jsx";
import FacebookButton from "./FacebookButton.jsx";

export const LoginPage = ({startGoogleLogin, startFacebookLogin}) => (
    <div className="box-layout">
        <div className="box-layout--box">
            <h1 className="box-layout--title">Expensify App</h1>
            <p>Keep track of what you spent with us.</p>
        <GoogleButton startGoogleLogin={startGoogleLogin}/>
        <FacebookButton startFacebookLogin={startFacebookLogin}/>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);