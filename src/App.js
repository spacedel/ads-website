import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Home component
import Ads from './pages/Ads'; // Ads listing component
import PostAds from './pages/PostAds'; // Ad posting component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/post-ads" element={<PostAds />} />
      </Routes>
    </Router>
  );
};

export default App;
