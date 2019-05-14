import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import GameCard from './components/GameCard';

function App() {
  return (
    <div className="app">
      <ButtonAppBar />
      <Sidebar />
      <div className="game-container">
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}

export default App;
