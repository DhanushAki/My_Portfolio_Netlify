import "./FormStyles.css";
import React from 'react'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'

const Form = () => {
  
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yh7tpoo', 'template_qb65584', form.current, {
        publicKey: 'KxHGkdxiB2u2VpQ2X',
      })
      .then(
        () => {
          setShowPopup(true)
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <div className="form">
        <form ref = {form} onSubmit={sendEmail}>
            <label> Your Name </label>
            <input type="text" name = "user_name" required></input>
            <label> Email </label>
            <input type="email" name="user_email" required></input>
            <label> Phone </label>
            <input type="text"></input>
            <label> Message </label>
            <textarea rows = "6" placeholder="Type Your Message here" name="user_message"/>
            <button type = "submit" className="btn"> Submit </button>
        </form>

        { showPopup && (
          <div className="popup">
            <p> Thank you For Submitting your Information!, Dhanush Will get in touch with you soon</p>
            <button onClick = {() => setShowPopup(false)}>Close</button>
          </div>
        )}
     
    </div>
  );
};

export default Form
