import "./HeroImgStyles.css";
import React from 'react';
import IntroImg  from "../assets/coding.jpg";
import myImg from "../assets/myFace4.jpg";
// import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-image" src = { IntroImg } alt="IntroImg"/>
        </div>
        <div className="content">
            <p className="name">Hi, I am Dhanush Bharath Raj</p>
            {/* <div>
              <Link to = "/project" className="btn"> Project </Link>
              <Link to = "/contact" className="btn-light"> Contact </Link>
            </div> */}
            <div className="image">
              <img src= { myImg } alt="MyFace"/>
            </div>
            <p >Harnessing the synergy of software development and data analytics, I stand ready to supercharge your project. Armed with expertise in full-stack development, front-end, and back-end technologies, my toolkit includes advanced algorithms, machine learning, and visualization techniques. Let's merge our skills to engineer innovative solutions that bring your vision to life!</p>
        </div>
    </div>
  )
}

export default HeroImg
