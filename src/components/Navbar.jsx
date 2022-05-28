import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/DesignOne">Design One</Link>
      <Link to="/Forms">Form Animations</Link>
    </nav>
  );
};

export default Navbar;
