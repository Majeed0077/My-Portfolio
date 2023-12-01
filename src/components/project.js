import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaBlog, FaEdit, FaFilm, FaThumbsUp } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import tem from "./img/project.PNG";
import projectData from "./projectData";
import { motion } from "framer-motion";
import "./CSS//Project.css";
import { themeContext } from "../Context";
import socketIOClient from "socket.io-client";

const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [likeCounts, setLikeCounts] = useState({});
  const [likeStatus, setLikeStatus] = useState({});
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const fetchLikeCounts = async () => {
      try {
        const likeCountPromises = projectData.map(async (project) => {
          const response = await axios.get(`http://localhost:5000/api/like/${project._id}`);
          return { [project._id]: response.data.count };
        });

        const likeCountsArray = await Promise.all(likeCountPromises);
        const newLikeCounts = Object.assign({}, ...likeCountsArray);

        setLikeCounts(newLikeCounts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLikeCounts();

    // Connect to the server's socket.io instance
    const socket = socketIOClient("http://localhost:5000");
    setSocket(socket);

    // Listen for the likeCountUpdate event
    socket.on("likeCountUpdate", ({ projectId, count }) => {
      setLikeCounts((prevCounts) => ({
        ...prevCounts,
        [projectId]: count,
      }));
    });

    // Cleanup the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const toggleLike = async (projectId) => {
    try {
      const response = await axios.post('http://localhost:5000/api/like', {
        projectId,
      });

      setLikeStatus((prevStatus) => {
        const newStatus = { ...prevStatus };
        newStatus[projectId] = !newStatus[projectId]; // Toggle like status
        return newStatus;
      });

      setLikeCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        newCounts[projectId] = response.data.count;
        return newCounts;
      });

      // Emit a message to the server about the like action
      socket.emit("likeAction", { projectId, count: response.data.count });
    } catch (error) {
      console.error(error);
    }
  };

  const [showFullDescriptions, setShowFullDescriptions] = useState(
    Array(projectData.length).fill(false)
  );

  const toggleShowFullDescriptions = (index) => {
    setShowFullDescriptions((prevShowFullDescriptions) => {
      const newShowFullDescriptions = [...prevShowFullDescriptions];
      newShowFullDescriptions[index] = !newShowFullDescriptions[index];
      return newShowFullDescriptions;
    });
  };


  return (
    <>
      <h1
        className="display-4"
        style={{
          fontSize: "2rem",
          border: darkMode ? "1px solid orange" : "",
          textAlign: "center",
          borderRadius: "25px 0 25px 0",
        }}
      >
        My Projects<i className="fa-solid fa-laptop-code"></i>
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <div className="row"></div>
        <div className="row align-items-center">
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="col-md-6 col-sm-12"
          >
            <img
              src={tem}
              className="img-fluid mt-4"
              alt="Software Development"
            />
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
                    className=""
                  >
                    {project.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <hr />
        <div
          className="container"
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
        >
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
                    style={{ position: "relative" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="circular-image"
                    />
                    {project.buttonLink && (
                      <a
                        href={project.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="custom-button"
                      >
                        Demo
                        <FiExternalLink />
                      </a>
                    )}
                    <div
                      className="title-overlay"
                      style={{
                        background: darkMode ? "black" : "",
                        color: darkMode ? "white" : "",
                      }}
                    >
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
                    className="description"
                    style={{
                      background: darkMode ? "black" : "",
                      color: darkMode ? "white" : "",
                    }}
                  >
                    {showFullDescriptions[index] ||
                    project.description.length <= 20
                      ? project.description
                      : `${project.description.substring(0, 110)}..`}
                    {project.description.length > 20 && (
                      <button
                        className="btn seemore-btn"
                        onClick={() => toggleShowFullDescriptions(index)}
                      >
                        {showFullDescriptions[index] ? "See Less" : "See More"}
                      </button>
                    )}
                  </motion.p>
                </div>
                <div className="text-center mt-3">
                  <div className="text-center mt-3">
                    <motion.button
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`btn btn-light ${
                        likeStatus[project._id] ? "text-danger" : ""
                      }`}
                      onClick={() => toggleLike(project._id)}
                    >
                      {likeStatus[project._id] ? "Unlike" : "Like"}{" "}
                      <FaThumbsUp /> {likeCounts[project._id]}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <hr />
      </motion.div>
    </>
  );
};
export default Project;