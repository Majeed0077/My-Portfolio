import React, { useEffect, useState, useContext } from "react";
// import {Swiper, SwiperSlide} from 'swiper/react'
import Prec from "./img/prec.png";
import Aptech from "./img/aptech.png";
import fiver from "./img/fiver.png";
import coding from "./img/intern.jpg";
import learning from "./img/learning.png";
import data from "./img/data.png";
import { motion, useAnimation } from "framer-motion";
import { themeContext } from "../Context";
import "swiper/css";
import "./CSS/workexp.css";

const ExperienceCard = ({ imgSrc, title, details }) => {
  // Theme Context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const controls = useAnimation();
  const [showFullDetails, setShowFullDetails] = useState(false);
  const toggleShowFullDetails = () => {
    setShowFullDetails(!showFullDetails);
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const workExperienceElement = document.getElementById("work-experience");

      if (workExperienceElement) {
        const elementOffsetTop = workExperienceElement.offsetTop;

        if (scrollY > elementOffsetTop - window.innerHeight / 1.5) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
    };

    const debounce = (func, delay) => {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
      };
    };

    const debouncedScroll = debounce(handleScroll, 50);

    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [controls]);

  // Limit the details text to 100 characters
  const limitedDetails = showFullDetails ? details : details.slice(0, 100);

  return (
    <motion.div
      className="main col-12 col-sm-6 col-md-4 col-lg-3 text-center"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="circular-image-container">
        <img
          src={imgSrc}
          alt={title}
          className="circular-images"
          loading="lazy"
        />
        <div className="Work-title">
          <h5 className="title">{title}</h5>
        </div>
      </div>
      <motion.p
        style={{
          marginTop: "10px",
          textAlign: "justify",
          lineHeight: "1.2",
          maxHeight: showFullDetails ? "none" : "85px",
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out, opacity 0.4s ease-in-out",
        }}
      >
        <span className="card-text">{limitedDetails}</span>
      </motion.p>
      {details.length > 100 && (
        <button
          className="btn see-more-btn"
          onClick={toggleShowFullDetails}
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
        >
          {showFullDetails ? "See Less" : "See More"}
        </button>
      )}
    </motion.div>
  );
};

const WorkExperience = () => {
  // Theme Context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <motion.div
      className="container"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="row">
        <div className="col-12 text-center">
          <h3
            className="shadow rounded-bottom-3 mb-4"
            style={{
              border: darkMode ? "1px solid orange" : "",
              background: darkMode ? "" : "",
            }}
          >
            {" "}
            <b>My Work & Experience</b> <i className="fas fa-briefcase"></i>
          </h3>
        </div>
      </div>
      <div className="row  mt-4" id="work-experience">
        <ExperienceCard
          imgSrc={Prec}
          title="Precise Technology"
          details="For the last 5 months, I've been a Junior Frontend Developer at Precise Technology, enjoying the flexibility of remote work. Collaborating with a skilled team, I've honed my frontend skills, creating engaging web experiences in this dynamic tech environment."
        />
        <ExperienceCard
          imgSrc={Aptech}
          title="Instructor At Aptech"
          details="During my university's third year, I spent 8 months as an instructor at Aptech Hyderabad, teaching Java and Android. It was a rewarding experience sharing my knowledge with enthusiastic learners and helping them develop valuable programming skills."
        />
        <ExperienceCard
          imgSrc={fiver}
          title="Front-End Developer"
          details="I spent three months working as a Front-End Developer on Fiverr, where I used my skills in web development to create visually appealing and user-friendly websites for various clients. Working on Fiverr allowed me to gain valuable experience in a dynamic and fast-paced freelance environment."
        />
        <ExperienceCard
          imgSrc={coding}
          title="PHP Development Internship"
          details="I completed a PHP development internship at Hidaya Institute of Science and Technology (HIST). During this time, I gained experience in developing web applications using PHP and MySQL. This internship helped me build my skills in PHP development and database management for creating dynamic and interactive websites."
        />
        <ExperienceCard
          imgSrc={learning}
          title="D.I.T Short Course"
          details="Proficient in web development with HTML, CSS, and JavaScript, and knowledgeable in computer networks, security, and IT fundamentals. Skilled in Microsoft Office, including Word, Excel, PowerPoint, and Outlook, and ready to contribute to any modern workplace."
        />
        <ExperienceCard
          imgSrc={data}
          title="Data Entry Operator on Fiverr"
          details="With 4-5 months of Fiverr experience, I'm a data entry expert specialized in web and data scraping. I excel in gathering, organizing, and inputting data accurately and efficiently, utilizing top-notch tools and software."
        />
      </div>
    </motion.div>
  );
};
export default WorkExperience;