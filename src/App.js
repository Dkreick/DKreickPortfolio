import React from "react";
import "./App.scss";
import ButtonAppBar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import ContentList from "./pages/ContentList";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ButtonAppBar />
        <Sidebar />
        <div className="container">
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/ContentList" component={ContentList} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
