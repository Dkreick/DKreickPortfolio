import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="app">
          <ButtonAppBar />
          <div className="container">
            <Route exact path="/(|Portfolio)" component={Home} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
