import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "A little bit about me." text = "As a passionate developer, I'm deeply interested in software development and data analytics. With broad exposure and practical application of core concepts, I thrive on solving real-world industry problems through algorithmic solutions."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
