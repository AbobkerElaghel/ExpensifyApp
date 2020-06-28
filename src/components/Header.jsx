import React from "react";
import {NavLink} from "react-router-dom";
import Logout from './Logout.jsx';

const Header = () => (
    <header>
        <h1>ExpensifyApp</h1>
        <p> <NavLink activeClassName="is-active-link" exact to="/">Home Page </NavLink></p>
        <p> <NavLink activeClassName="is-active-link" to="/create">Add Page </NavLink></p>
        {/*<p> <NavLink activeClassName="is-active-link" to="/edit/123">Edit Page </NavLink></p>*/}
        <Logout />
        {/*<p> <NavLink activeClassName="is-active-link" to="/help">Help Page </NavLink></p>*/}
    </header>
);

export default Header;