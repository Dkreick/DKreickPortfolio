import React from 'react';
import './App.scss';
import Navbar from './pages/Navbar';
import Intro from './pages/Intro';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './pages/Footer';
import * as firebase from 'firebase';

let firebaseConfig = {
  apiKey: "AIzaSyDGqu-g3wjP3mQ9vm13n5xHNo_G-uSEzzk",
  authDomain: "portfolio-c7080.firebaseapp.com",
  databaseURL: "https://portfolio-c7080.firebaseio.com",
  projectId: "portfolio-c7080",
  storageBucket: "portfolio-c7080.appspot.com",
  messagingSenderId: "250975158708",
  appId: "1:250975158708:web:88fecaaa912cc45622f2e1"
}

firebase.initializeApp(firebaseConfig);

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
