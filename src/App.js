import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='app'>
        <ButtonAppBar />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/Portfolio' component={Portfolio} />
          <Route exact path='/Resume' component={Resume} />
        </div>
      </div>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
