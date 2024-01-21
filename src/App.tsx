import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import Usecase from "./components/Usecase/Usecase";
import Review from "./components/Review/Review";
import "./App.css";

function App() {
  return (
    <>
      <Navbar 
      />
      <Hero/>
      <Usecase/>
      
    </>
  );
}

export default App;
