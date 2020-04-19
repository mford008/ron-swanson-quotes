import React from 'react';
import { NavLink } from "react-router-dom";

import './Nav.css';

const Navbar = () => {
    return (
      <div className="Nav">
        <NavLink exact to="/" className="NavLink" activeClassName="NavLink--selected">Home </NavLink>
        <NavLink to="/gifs" className="NavLink" activeClassName="NavLink--selected">Gifs </NavLink>
        <NavLink to="/admin" className="NavLink" activeClassName="NavLink--selected">Admin Page</NavLink>
      </div>
    );
};

export default Navbar;