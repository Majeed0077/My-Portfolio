import React, { useState } from 'react';
import skills from './img/skill.gif';
import skillData from './skillData';
import { motion } from 'framer-motion'
import "./CSS/Skill.css"

// Error boundary component
// eslint-disable-next-line
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // You can log the error to a logging service or handle it in other ways
    console.error(error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render an error message or fallback UI here
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}

const Skills = () => {
  // Initialize showFullDescriptions state as an array to manage each skill's description
  const [showFullDescriptions, setShowFullDescriptions] = useState(Array(skillData.length).fill(false));

  // Toggle the showFullDescriptions state for a specific skill by index
  const toggleShowFullDescriptions = (index) => {
    setShowFullDescriptions((prevShowFullDescriptions) => {
      const newShowFullDescriptions = [...prevShowFullDescriptions];
      newShowFullDescriptions[index] = !newShowFullDescriptions[index];
      return newShowFullDescriptions;
    });
  };

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }} animate={{ width: "100%", opacity: 1 }} exit={{ x: window.innerWidth, transition: { duration: 0.3, ease: "easeInOut" } }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center">
            <img src={skills} className="img-fluid mt-" style={{ maxWidth: "100%", float: "right", maxHeight: "300px" }} alt="Software Development" />
          </div>
          <div className="col-md-6 col-sm-12">
            <hr />
            <motion.p
              initial={{ opacity: 0, y: -20 }} // Initial state (hidden)
              animate={{ opacity: 8, y: 0 }}   // Animation state (visible)
              transition={{ duration: 2 }}     // Animation duration (1 second)
              style={{ textAlign: "justify", lineHeight: "1.6" }}
            >
              I'm a skilled web developer with expertise in JavaScript, Reactjs, Redux, PHP, WordPress, MySQL, HTML, CSS, and Bootstrap.
              My passion is creating captivating user interfaces that elevate web applications.
              I focus on responsive and interactive solutions, staying updated with emerging technologies.
              My portfolio reflects my technical prowess and attention to detail. Let's collaborate on innovative web projects!
            </motion.p>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-3"> <h1 className="display-4">My Skills<i className="fa-solid fa-laptop-code"></i></h1> </div>
        </div>
        <div className="row">
          {skillData.map((skill, index) => (
            <div key={index} className="col-md-4 col-sm-12 mb-4">
              <div className="text-center">
                <div className="circle"> <img src={skill.image} alt={skill.title} className="img-fluid rounded-circle" /> </div>
                <div className="progress" style={{ width: "100px", }}>
                  <div className="progress-bar" role="progressbar" style={{ width: `${skill.progress}%` }} aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100">
                    {skill.progress}%
                  </div>
                </div>
                <p className="mt-3" style={{ fontSize: "0.9rem", position: "relative" }}>
                  {showFullDescriptions[index] || skill.description.length <= 20
                    ? skill.description
                    : `${skill.description.substring(0, 120)}..`
                  }
                  {skill.description.length > 20 && (
                    <button className="btn seemore-btn" onClick={() => toggleShowFullDescriptions(index)}>{showFullDescriptions[index] ? 'See Less' : 'See More'}</button>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </motion.div>
  );
};

export default Skills;
