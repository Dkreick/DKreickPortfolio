import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import GameList from './pages/GameList';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ButtonAppBar />
        <Sidebar />
        <div className="game-container">
          <GameList />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
