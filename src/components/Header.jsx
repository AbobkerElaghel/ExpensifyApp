import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>ExpensifyApp</h1>
        <p> <NavLink activeClassName="is-active-link" exact to="/">Home Page </NavLink></p>
        <p> <NavLink activeClassName="is-active-link" to="/create">Add Page </NavLink></p>
        <p> <NavLink activeClassName="is-active-link" to="/edit/123">Edit Page </NavLink></p>
        <p> <NavLink activeClassName="is-active-link" to="/help">Help Page </NavLink></p>
    </header>
);

export default Header;