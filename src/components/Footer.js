import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  // eslint-disable-next-line
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <footer className={`container-fluid footer ${darkMode ? 'dark' : ''}`}>
      <div className="row social-links justify-content-center">
        <div className="col-auto">
          <a href="https://www.facebook.com/MajeedAbro" target="_blank" rel="noopener noreferrer"><FaFacebook className='mx-1' /></a>
        </div>
        <div className="col-auto">
          <a href="https://twitter.com/Majeed_AbRoo" target="_blank" rel="noopener noreferrer"><FaTwitter className='mx-1' /></a>
        </div>
        <div className="col-auto">
          <a href="https://www.instagram.com/majeedabro1" target="_blank" rel="noopener noreferrer"><FaInstagram className='mx-1' /></a>
        </div>
        <div className="col-auto">
          <a href="https://www.linkedin.com/in/majeed-abro-0m7/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='mx-1' /></a>
        </div>
        <div className="col-auto">
          <a href="mailto:kingabro112@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className='mx-1' /></a>
        </div>
        <div className="col-auto">
          <a href="https://wa.me/923483382427" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='mx-1' /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
