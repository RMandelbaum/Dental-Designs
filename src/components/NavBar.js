import React from 'react';
import { NavLink } from 'react-router-dom';
import '..styles/NavBar.css';

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
        to="/our-team"
      >
        OUR TEAM
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/services"
      >
        SERVICES
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
        CONTACT US
      </NavLink>
      <NavLink
        className="navbar-item"
        to="/faqs"
      >
        FAQS
      </NavLink>
     </div>
  );
}


export default NavBar;
