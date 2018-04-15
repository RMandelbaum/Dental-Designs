import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = props => {
  return (
    <div className="navbar-container">
      <NavLink
      className="navbar-item"
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/about"
      >
        OUR MISSION
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/appointment"
          >
            BOOK AN APPOINTMENT
          </NavLink>

      <NavLink
        className="navbar-item"
        to="/contact"
      >
        CONTACT
      </NavLink>
     </div>
  );
}


export default NavBar;
