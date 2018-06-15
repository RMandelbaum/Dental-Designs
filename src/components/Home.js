import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home = () => {
  return(
      <div className = "home">
        <img className = "home-container" />

        <div className = "links-container">
          <div className = "links-horizontal" id="slot-links">
              <Link to="/our-practice" >Our Practice</Link>
              <Link to="/our-team" >Our Team</Link>
              <Link to="/office-tour" >Office Tour</Link>
              <Link to="/special-offers" >Special Offers</Link>
          </div>
       </div>

      </div>
  )
}

export default Home;
