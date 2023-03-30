import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink exact to="/" activeClassName="active">Landing</NavLink>
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      {/* Add more navigation links as needed */}
    </nav>
  );
};

export default NavBar;