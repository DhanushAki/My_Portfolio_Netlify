import './App.css';
import React from 'react';
import "./index.css";
import Home from "./routes/Home.js";
import Project from "./routes/Project.js";
import Skills from "./routes/Skills.js";
import Contact from "./routes/Contact.js";
import About from "./routes/About.js";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = { <Home />} />
      <Route path="/about" element = { <About />} />
      <Route path="/contact" element = { <Contact />} />
      <Route path="/project" element = { <Project />} />
      <Route path= "/skills" element = { <Skills />} /> 
      </Routes>
    </>
  );
}

export default App;
