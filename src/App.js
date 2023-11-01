import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import gif from './components/img/loading.gif';
import './App.css';
import './loader.css';
import { BrowserRouter as Router } from 'react-router-dom';

const AnimaterRoutes = lazy(() => import('./components/AnimaterRoutes'));

function Loader() {
  return (
    <div className="loader">
      <img src={gif} alt="Loader" style={{ height: "10%" }} />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the loader
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <AnimaterRoutes />
            <Footer />
          </>
        )}
      </Suspense>
    </Router>
  );
}

export default App;
