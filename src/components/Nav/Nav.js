import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/gifs">Gifs </Link>
      </div>
    );
};

export default Navbar;