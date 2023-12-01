import React, { useState, useEffect, lazy, Suspense, 
  useContext 
} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import gif from './components/img/loading.gif';
import './App.css';
import './loader.css';
import {themeContext} from './Context'

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
 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div 
    style={{
      background:darkMode? 'black' : '',
      color: darkMode? 'white' : '',
    }} 
    >
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
    </div>
  );
}

export default App;
