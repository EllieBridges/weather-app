import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="linkContainer">
          <li className="homeButton">
            <Link to="/" className="navbarLinks">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="navbarLinks">
              Blogs
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
