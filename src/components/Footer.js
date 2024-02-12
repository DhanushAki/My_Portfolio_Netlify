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
                <h4> <a href="mailto:dhanushbraj04@gmail.com"> <FaMailBulk size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                        dhanushbraj04@gmail.com  
                </h4>
            </div>
            
        </div>

        <div className="right"> 
            <h4> Wanna Elevate your networking game..?</h4>
            <p>Join me on Twitter for updates, LinkedIn for my professional journey, Instagram for my content edits and Portraits
                and GitHub for coding adventures. Let's connect.</p>
            <div className="social">
            <a href="https://www.facebook.com/dhanush.braj.3/"><FaFacebook size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
            <a href="https://twitter.com/DHANUSHBRAJ18"><FaTwitter size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://www.linkedin.com/in/dhanush-bharath-raj-9b0186175/"><FaLinkedin size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://github.com/DhanushAki"><FaGithub size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://www.instagram.com/dhanush__.18/"><FaInstagram size = {20}
                    style={{color:"#fff", marginRight: "2rem"}}/></a>
                

                        
            </div>

        </div>

        
    </div>
    </div>
  )
}

export default Footer
