import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        
        <div className="left">
            <div className="location">
                <FaHome size = {20} 
                    style = {{color:"#fff", marginRight: "5rem"}}/>
            </div>
            <div>
                {/* <p> 1150 S Clarizz Blvd Apartment, 47401</p> */}
                <p> Bloomington, Indiana, United States</p>
            </div> 
            <div className="phone">
                <h4><FaPhone size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/>
                        +1 812-553-1425 
                </h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/>
                        dhanushbraj04@gmail.com 
                </h4>
            </div>
            
        </div>

        <div className="right"> 
            <h4> Wanna Elevate your networking game..?</h4>
            <p>Join me on Twitter for updates, LinkedIn for my professional journey, Instagram for my content edits and Portraits
                and GitHub for coding adventures. Let's connect.</p>
            <div className="social">
                <FaFacebook size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/>
                <FaTwitter size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/>
                <FaLinkedin size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/>
                <FaGithub size={20} 
                    style={{color:"#fff", marginRight: "2rem"}}/>
                <FaInstagram size={20}
                    style={{color:"#fff", marginRight: "2rem"}}/>
                        
            </div>

        </div>

        
    </div>
    </div>
  )
}

export default Footer
