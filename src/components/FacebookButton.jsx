import React from "react";

const FacebookButton = ({startFacebookLogin}) => (
    <div className="button--facebook" onClick={startFacebookLogin}>
        <div className="facebook-icon-wrapper">
            <img className="facebook-icon"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png"/>
        </div>
        <p className="facebook-btn-text"><b>Sign in with facebook</b> </p>
    </div>
);

export default FacebookButton;