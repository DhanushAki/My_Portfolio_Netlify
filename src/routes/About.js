import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "A little bit about me." text = "I'm passionate about software development, solving real-world problems with algorithmic solutions and industry insights."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
