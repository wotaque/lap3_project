import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const history = useHistory()

    function handleClick() {
        history.push("/");
    }

    return (
        <nav>
            <NavLink className="home-link" to="/">Main page</NavLink>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            <NavLink activeClassName="active" to="/search">Search</NavLink>
            <button type="button" onClick={handleClick}>
          Go home
        </button>
        </nav>
    );
}

export default NavBar;
