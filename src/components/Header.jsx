import React from "react";
import {Link} from "react-router-dom";
import Logout from './Logout.jsx';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" exact to="/dashboard">
                    <h1>Expensify</h1>
                </Link>
        {/*<p> <NavLink activeClassName="is-active-link" to="/edit/123">Edit Page </NavLink></p>*/}
                <Logout />
            </div>
        </div>
        {/*<p> <NavLink activeClassName="is-active-link" to="/help">Help Page </NavLink></p>*/}
    </header>
);

export default Header;