import "./HeroImgStyles.css";
import React from 'react';
import IntroImg  from "../assets/coding.jpg";
import myImg from "../assets/myFace3.jpg";
// import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-image" src = { IntroImg } alt="IntroImg"/>
        </div>
        <div className="content">
            <p className="name">Hi, I am Dhanush Bharath Raj</p>
            <h1 className="heading">I am a Developer</h1>
            {/* <div>
              <Link to = "/project" className="btn"> Project </Link>
              <Link to = "/contact" className="btn-light"> Contact </Link>
            </div> */}
            <div className="image">
              <img src= { myImg } alt="MyFace"/>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
