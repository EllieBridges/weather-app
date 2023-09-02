import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="navbarbg">
        <ul className="linkContainer">
          <li className="homeButton">
            <Link to="/" className="navbarLinks">
              Home
            </Link>
          </li>
          <li>
            <Link to="/today" className="navbarLinks">
              Today
            </Link>
          </li>
          <li>
            <Link to="/forecast" className="navbarLinks">
              Forecast
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbarLinks">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
