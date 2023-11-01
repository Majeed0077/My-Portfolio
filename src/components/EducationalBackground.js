import React, { useEffect, useState } from 'react';
import edu from './img/education.jpg';
import { motion, useAnimation } from 'framer-motion';


const EducationalBackground = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elementOffsetTop = document.getElementById('educational-background').offsetTop;
      const triggerOffset = window.innerHeight / 1.5;

      if (scrollY > elementOffsetTop - triggerOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
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
    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isVisible, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center shadow">
          <h3>
            <b>Educational Background</b> <i className="fas fa-graduation-cap"></i>
          </h3>
        </div>
      </div>
      <div className="row align-items-center" id="educational-background">
        <div
          className="col-md-6 col-sm-12" style={{ display: "grid", placeItems: "center", height: "100%" }}>
          <motion.img src={edu} className="img-fluid mt-2 img-fluid-mobile"
            style={{
              boxShadow: "0px -0px 0px rgb(173, 90, 90)",
              maxWidth: "60%",
              marginBottom: "10%",
              width:"40%"
            }}
            alt="Educational Background" variants={variants} initial="hidden" animate={controls} />
        </div>
        <div className="col-md-6 col-sm-12">
          <motion.p style={{ marginTop: "20px", textAlign: "justify", lineHeight: "1.6" }} variants={variants} initial="hidden" animate={controls}>
            
            <span style={{ fontSize: "1.0rem", fontWeight: "bold" }}>Educational Journey:</span><br />
            <span style={{ display: "inline-block", textAlign: "justify", marginLeft: "20px" }}>
              &rarr; Started my educational journey at <span style={{ color: "#ff6b6b" }}>Government Boys High School</span> in Badah, Pakistan, completing Matriculation in 2013.<br />
              &rarr; Excelled at <span style={{ color: "#ff6b6b" }}>Govt Boys Higher Secondary School Badah</span> during intermediate.<br />
              &rarr; Pursued a prestigious Bachelor's degree in Computer Science at the <span style={{ color: "#ff6b6b" }}>University of Sindh</span> in 2018.<br />
              &rarr; Graduated with honors in 2021, equipped with a strong foundation and hands-on experience.<br />
              &rarr; Eager to apply knowledge in creating innovative solutions for a positive impact on society.<br />
              &rarr; Committed to contributing to the betterment of the computer science field. 
            </span>
          </motion.p>
        </div>
      </div>
    </div >
  );
};
export default EducationalBackground;
