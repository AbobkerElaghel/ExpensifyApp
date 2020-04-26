import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <header>
        <h1>ExpensifyApp</h1>
        <p> <NavLink activeClassName="is-active-link" exact to="/">Home Page ma Nigga</NavLink></p>
        <p> <NavLink activeClassName="is-active-link" to="/create">Add Page ma Nigga</NavLink></p>
        <p> <NavLink activeClassName="is-active-link" to="/edit">Edit Page ma Nigga</NavLink></p>
        <p> <NavLink activeClassName="is-active-link" to="/help">Help Page ma Nigga</NavLink></p>
    </header>
);

export default Header;