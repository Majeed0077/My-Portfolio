import React from 'react';
import Introduction from './Introduction';
import EducationalBackground from './EducationalBackground';
import WorkExperience from './WorkExperience';
import { motion } from 'framer-motion'
import Experience from './Experience/Experience';

const Home = () => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3, ease: "easeInOut" } }}
    >
      <Introduction />
      <hr style={{ backgroundColor: "black", borderRadius: "", height: "0.2rem" }} />
      <Experience/>
      <hr />
      <EducationalBackground />
      <hr style={{ backgroundColor: "black", borderRadius: "", height: "0.2rem" }} />
      <WorkExperience />
    </motion.div>
  );
};

export default Home;
