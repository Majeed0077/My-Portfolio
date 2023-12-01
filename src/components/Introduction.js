import React, { useEffect, useContext } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";
import {
  FaFacebook,
  // FaTwitter,
  // FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import dev from "./img/Majeedd.png";
import CV from "./img/Majeed Abro.pdf";
import { motion } from "framer-motion";
import Typed from "typed.js";
import "./CSS/intro.css";
import { themeContext } from "../Context";

const Introduction = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "<span class='frontend'>Front-End</span><span class='developer'>Developer</span><span class='icon'>💻</span>",
        "<span class='backend'>Back-End</span> <span class='developer'>Developer</span><span class='icon'>💻</span>",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className="container"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <br />
      <br />
      <div className="row align-items-center">
        {/* <div className="blur hero-blur"></div> */}
        <div className="col-md-6 col-sm-12 order-md-1 order-2">
          <div className="text-section">
            <h6>
              <b>
                Hello! I'm{" "}
                <span className="multiple-text">Abdul Majeed Abro</span>
              </b>
            </h6>
            <motion.p
              className="intro-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 8, y: 0 }}
              transition={{ duration: 2 }}
              style={{ textAlign: "justify", lineHeight: "1.6" }}
            >
              <span style={{ color: "red" }}>Hello!</span> I'm a computer
              science graduate passionate about front-end and back-end
              development, specializing in JavaScript, ReactJS, PHP, WordPress, HTML, CSS,
              Bootstrap, and Elementor. With a proven track
              record on platforms like Fiverr, I'm ready to tackle new
              challenges and bring innovation to collaborative teams. Explore my
              projects and let's discuss exciting collaborations. Reach out — I
              look forward to connecting with you!"
            </motion.p>
            <a href={CV} download className="btn btn-gradient btn-sm cvbtn">
              Download My CV <FaBook />
            </a>
            <a
              className="btn btn-gradient btn-sm  hmbtn"
              href="mailto:MajeedAbro007@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
              }}
            >
              Hire Me <HiOutlineBriefcase />
            </a>
            <div className="social-icons-container">
              <a
                href="https://www.linkedin.com/in/majeed-abro-0m7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="mailto:MajeedAbro007@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="social-icon" />
              </a>
              <a
                href="https://github.com/Majeed0077"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub className="social-icon" />
              </a>
              <a
                href="https://wa.me/923483382427"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="social-icon" />
              </a>
              <a
                href="https://www.facebook.com/MajeedAbro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" />
              </a>
              {/* <a href="https://twitter.com/Majeed_AbRoo" target="_blank" rel="noopener noreferrer"><FaTwitter className='social-icon' /></a>
                            <a href="https://www.instagram.com/majeedabro1" target="_blank" rel="noopener noreferrer"><FaInstagram className='social-icon' /></a> */}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center order-md-2 order-1">
          <div className="image-container bounce col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <div className="image-container">
              <img src={dev} className="img-fluid" alt="Software Development" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Introduction;
