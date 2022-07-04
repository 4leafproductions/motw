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



class App extends React.Component{
  state ={currentPage: "landing"}

  handleSubmit = (childData) =>{
    this.setState({currentPage: childData})
    console.log("state: ",this.state);
  }
  render(){
    const currentPage = this.state.currentPage;
    return (
      <div className="App">
        {currentPage == "landing" && <LandingPage onSubmit = {this.handleSubmit}></LandingPage>}
        {currentPage == "main" && <MainPage></MainPage>}
      </div>
    );
  }
}

export default App;
