import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Portfolio from './pages/Portfolio';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='app'>
        <ButtonAppBar />
        <div className='container'>
          <Route exact path='/' component={Portfolio} />
          <Route exact path='/Portfolio' component={Portfolio} />
          <Route exact path='/AboutMe' component={AboutMe} />
        </div>
      </div>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
