import React from 'react';
import './App.scss';
import ButtonAppBar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import ContentList from './pages/ContentList';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <ButtonAppBar />
        <Sidebar />
        <div className='container'>
          <Route exact path='/' component={ContentList} />
          <Route exact path='/ContentList' component={ContentList} />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
