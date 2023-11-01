import React, { useState, useEffect } from 'react';
import { FaBlog, FaEdit, FaFilm, FaThumbsUp } from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";
import tem from './img/project.PNG';
import projectData from './projectData';
import { motion } from 'framer-motion';
import './CSS//Project.css';

const Project = () => {
  const [likeCounts, setLikeCounts] = useState(() => {
    const savedCounts = JSON.parse(localStorage.getItem('likeCounts'));
    return savedCounts || Array(projectData.length).fill(0);
  });

  const [showFullDescriptions, setShowFullDescriptions] = useState(Array(projectData.length).fill(false));

  const toggleLike = (index) => {
    setLikeCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCounts[index] ? 0 : 1;
      return newCounts;
    });
  };

  const toggleShowFullDescriptions = (index) => {
    setShowFullDescriptions((prevShowFullDescriptions) => {
      const newShowFullDescriptions = [...prevShowFullDescriptions];
      newShowFullDescriptions[index] = !newShowFullDescriptions[index];
      return newShowFullDescriptions;
    });
  };

  useEffect(() => {
    localStorage.setItem('likeCounts', JSON.stringify(likeCounts));
  }, [likeCounts]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
    >
      <div className="row">
        <div className="col-12 text-center shadow">
          <h1>My Projects <i className="fa-sharp fa-solid fa-graduation-cap"></i></h1>
        </div>
      </div>
      <div className="row align-items-center">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="col-md-6 col-sm-12"
        >
          <img src={tem} className="img-fluid mt-4" alt="Software Development" />
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="col-md-6 col-sm-12"
        >
          <div style={{ marginTop: "20px", textAlign: "justify" }}>
            {projectData.slice(0, 3).map((project, index) => (
              <div key={index}>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.title}
                  {index === 0 && <FaBlog />}
                  {index === 1 && <FaEdit />}
                  {index === 2 && <FaFilm />}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-muted"
                >
                  {project.description}
                </motion.p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
              className="col-md-6 col-lg-4 mb-4"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="circular-image-container"
                  style={{ position: 'relative' }}
                >
                  <img src={project.image} alt={project.title} className="circular-image" />
                  {project.buttonLink && (
                    <a href={project.buttonLink} target="_blank" rel="noopener noreferrer" className="custom-button">
                      <FiExternalLink />
                    </a>
                  )}
                  <div className="title-overlay">
                    <motion.h5
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="title"
                    >
                      {project.title}
                    </motion.h5>
                  </div>
                </motion.div>
              </div>
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="description text-muted"
                >
                  {showFullDescriptions[index] || project.description.length <= 20 ? project.description : `${project.description.substring(0, 110)}..`}
                  {project.description.length > 20 && (
                    <button className="btn seemore-btn" onClick={() => toggleShowFullDescriptions(index)}>
                      {showFullDescriptions[index] ? 'See Less' : 'See More'}
                    </button>
                  )}
                </motion.p>
              </div>
              <div className="text-center mt-3">
                <motion.button
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`btn btn-light ${likeCounts[index] ? 'text-danger' : ''}`}
                  onClick={() => toggleLike(index)}
                >
                  <FaThumbsUp /> {likeCounts[index]}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <hr />
    </motion.div>
  );
};

export default Project;
