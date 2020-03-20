import React from 'react';
import { Link } from "react-router-dom";

import './Nav.css';


function Navbar() {
    return (
      <div className="Nav">
        <Link to="/" className="Link">Home </Link>
        <Link to="/gifs" className="Link">Gifs </Link>
      </div>
    );
};

export default Navbar;