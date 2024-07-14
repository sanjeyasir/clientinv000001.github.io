// src/App.js
import React, { useState, useEffect }  from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home.P";
import ProductInformation from './pages/productInformation/productInformation.P';
import Loading from './pages/loading/loading.P';
import Contact from './pages/contact/contact.P';


function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setFadeOut(true);
      // After fade-out transition, set loading to false
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Match this duration with your CSS transition duration
    }, 2000); // Adjust the delay as needed

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Loading fadeOut={fadeOut} />  :<>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductInformation />} />
          <Route path="/contacts" element={<Contact />} />
          
         
        </Routes>
      </Router>
      
      </>
      }
      
    </div>
  );
}

export default App;


//  <Router basename="/professionalprofile.github.io">
