import React from 'react'
import Home from './Home';
import Skills from './Skills.js';
import Project from './project'; // eslint-disable-line
import MyError from './Error';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimaterRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route path="/project" element={<Project />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="*" element={<MyError />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimaterRoutes
