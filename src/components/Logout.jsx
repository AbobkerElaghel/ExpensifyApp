import React from "react";
import {startLogout} from "../actions/authAction";
import {connect} from "react-redux";

export const Logout = ({startLogout}) => (
    <div>
        <button onClick={startLogout}>Logout</button>
    </div>
);

const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Logout);