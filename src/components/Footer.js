import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub, FaInstagram } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        
        <div className="left">
            <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <p>Raleigh, North Carolina, USA</p>
            </div>

            <div className="phone">
                <h4><FaPhone size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/>
                        +1 812-553-1425 
                </h4>
            </div>
            <div className="email">
                <h4> <a href="mailto:dhanushbraj04@gmail.com"> <FaMailBulk size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                        dhanushbraj04@gmail.com  
                </h4>
            </div>
            
        </div>

        <div className="right"> 
            <h4> Want to Elevate your networking game..?</h4>
            <p>Connect on LinkedIn, Instagram & GitHub!</p>
            <div className="social">
            <a href="https://www.facebook.com/dhanush.braj.3/" target="_blank" rel="noopener noreferrer"><FaFacebook size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
            <a href="https://twitter.com/DHANUSHBRAJ18" target="_blank" rel="noopener noreferrer"><FaXTwitter size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://www.linkedin.com/in/dhanush-bharath-raj-9b0186175/" target="_blank" rel="noopener noreferrer"><FaLinkedin size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://github.com/DhanushAki" target="_blank" rel="noopener noreferrer"><FaGithub size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://www.instagram.com/dhanush__.18/" target="_blank" rel="noopener noreferrer"><FaInstagram size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                        
            </div>
        </div>

        
    </div>
    </div>
  )
}

export default Footer
