import React from "react";

const GoogleButton = ({startGoogleLogin}) => (
    <div className="button--google" onClick={startGoogleLogin}>
        <div className="google-icon-wrapper">
            <img className="google-icon"
                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google icon"/>
        </div>
        <p className="google-btn-text"><b>Sign in with google</b> </p>
    </div>
);

export default GoogleButton;