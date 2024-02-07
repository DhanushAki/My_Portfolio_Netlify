import "./AboutContentStyles.css";
import React from 'react';
import { Link } from 'react-router-dom';
import img1  from '../assets/react1.jpeg';
import img2  from '../assets/react2.jpeg';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I..?</h1>
            <p> I am a react Front End Developer, I create responsive sources websites</p>
            <Link to = "../contact">
                <button className="btn"> Contact </button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                   <img src = { img1 } className = "img" alt="True"></img>
                </div>
                <div className="img-stack bottom">
                   <img src = { img2 } className = "img" alt="True"></img>
                </div>
            </div>

        </div>
     
    </div>
  )
}

export default AboutContent
