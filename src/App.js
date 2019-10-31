import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <div className="app">
        <ButtonAppBar />
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
