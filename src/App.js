import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React, { useState } from "react";
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';

const Player = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3></h3>
    </div>
  )
}



function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <div className="App">
      {/* <LandingPage></LandingPage> */}
      <MainPage></MainPage>
      
    </div>
  );
}

export default App;
