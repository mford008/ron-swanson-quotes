import React from 'react';
import { NavLink } from "react-router-dom";

import './Nav.css';


function Navbar() {
    return (
      <div className="Nav">
        <NavLink exact to="/" className="NavLink" activeClassName="selected">Home </NavLink>
        <NavLink to="/gifs" className="NavLink" activeClassName="selected">Gifs </NavLink>
      </div>
    );
};

export default Navbar;