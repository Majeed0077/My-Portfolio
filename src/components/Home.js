import React from 'react';
import Introduction from './Introduction';
import EducationalBackground from './EducationalBackground';
import WorkExperience from './WorkExperience';
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3, ease: "easeInOut" } }}
    >
      <Introduction />
      <hr style={{ backgroundColor: "black", borderRadius: "", height: "0.2rem" }} />
      <EducationalBackground />
      <hr style={{ backgroundColor: "black", borderRadius: "", height: "0.2rem" }} />
      <WorkExperience />
      <hr />
    </motion.div>
  );
};

export default Home;
