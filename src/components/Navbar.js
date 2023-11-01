import React, { useState } from 'react';
import { FaCode, FaLaptopCode, FaHome } from 'react-icons/fa';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line 
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary fixed-top mb-8" data-bs-theme="dark">
        <div className="container-fluid">
          <h1 className="navbar-brand">
            <Link to="/" onClick={handleLinkClick} style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '21px', color: 'red' }}>Port</span>
              <span style={{ color: 'white', fontSize: '23px' }}>Folio<span style={{ color: '#333' }}>❤️</span></span>
            </Link>
          </h1>
          <div className="mx-auto">
            <ul className="navbar-nav flex-row">
              <li className="nav-item active">
                <Link className="nav-link mx-2" to="/" onClick={handleLinkClick}>
                  <FaHome />
                  <span className="d-none d-lg-inline">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/project" onClick={handleLinkClick}>
                  <FaLaptopCode />
                  <span className="d-none d-lg-inline">Projects</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/skills" onClick={handleLinkClick}>
                  <FaCode />
                  <span className="d-none d-lg-inline">My Skills</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid mb-2" style={{ paddingTop: "75px" }}>
        <div className="scrolling-text-container">
          <span className="scrolling-text" aria-label="heart">❤️ FrontEnd Developer &rarr; Web Developer &rarr; BackEnd Developer </span>
        </div>
      </div>
      <br />
    </>
  )
}
export default Navbar;