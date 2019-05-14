import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import GameList from './pages/GameList';

function App() {
  return (
    <div className="app">
      <ButtonAppBar />
      <Sidebar />
      <div className="game-container">
        <GameList />
      </div>
    </div>
  );
}

export default App;
