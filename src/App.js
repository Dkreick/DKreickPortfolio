import React from 'react';
import './App.scss';
import Navbar from './pages/Navbar';
import Intro from './pages/Intro';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="page">
      <Navbar />
      <Intro />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
