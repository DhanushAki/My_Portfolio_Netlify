import "./PricingCardStyles.css";
import React from 'react';
// import { Link } from "react-router-dom";
import { ReactJSIcon, AngularIcon, NodeJSIcon, JavaIcon, JavascriptIcon, HtmlIcon, PythonIcon, 
        SpringIcon, MongoDB, Git, Django, TypeScript, Redis, Sql, Jenkins, Eclipse, Docker, VSCode, Jira, AWSLambda, Postman  } from "./PricingCardImports";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Primary Skills -</h3>
                <span className="bar"></span>
                <div className="jj"> 
                <p className="btc">- ReactJS -</p>
                <img className = "icon" src={ReactJSIcon} alt="ReactJS" />
                </div>
                <div className="jj">
                    <p>- AngularJS -</p>
                    <img className = "icon"src={AngularIcon} alt="ReactJS" />
                </div>
                <div className="jj">
                    <p>- NodeJS -</p>
                    <img className = "icon" src={NodeJSIcon} alt="NodeJS" />
                </div>
                <div className="jj">
                    <p>- Java -</p>
                    <img className = "icon" src={JavaIcon} alt="Java" />
                </div>
                <div className="jj">
                    <p>- JavaScript -</p>
                    <img className = "icon" src={JavascriptIcon} alt="JavaScript" />
                </div>
                <div className="jj">
                    <p>- HTML/CSS -</p>
                    <img className = "icon" src={HtmlIcon} alt="HTML" />
                </div>
                <div className="jj">
                    <p>- Python -</p>
                    <img className = "icon" src={PythonIcon} alt="Python" />
                </div>
                {/* <Link to= "/contact" className="btn"> Purchase </Link> */}
            </div>

            <div className="card">
                <h3>- Secondary Skills -</h3>
                <span className="bar"></span>
                <div className="jj">
                    <p>- Spring Boot -</p>
                    <img className = "icon" src={SpringIcon} alt="SpringBoot" />
                </div>
                <div className="jj">
                    <p>- MongoDB -</p>
                    <img className = "icon" src={MongoDB} alt="MongoDB" />
                </div>
                <div className="jj">
                    <p>- Git -</p>
                    <img className = "icon" src={Git} alt="Git" />
                </div>
                <div className="jj">
                    <p>- Django -</p>
                    <img className = "icon" src={Django} alt="Django" />
                </div>
                <div className="jj">
                    <p>- TypeScript -</p>
                    <img className = "icon" src={TypeScript} alt="TypeScript" />
                </div>
                <div className="jj">
                    <p>- Redis -</p>
                    <img className = "icon" src={Redis} alt="Redis" />
                </div>
                <div className="jj">
                    <p>- SQL -</p>
                    <img className = "icon" src={Sql} alt="SQL" />
                </div>

                {/* <Link to= "/contact" className="btn"> Purchase </Link> */}
            </div>

            <div className="card">
                <h3>- Web Tools -</h3>
                <span className="bar"></span>
                <div className="jj">
                    <p className="btc">- Jenkins -</p>
                    <img className = "icon" src={Jenkins} alt="Jenkins" />
                </div>
                <div className="jj">
                    <p className="btc">- Eclipse -</p>
                    <img className = "icon" src={Eclipse} alt="Eclipse" />
                </div>
                <div className="jj">
                    <p className="btc">- Docker -</p>
                    <img className = "icon" src={Docker} alt="Docker" />
                </div>
                <div className="jj">
                    <p className="btc">- VS Code -</p>
                    <img className = "icon" src={VSCode} alt="VSCode" />
                </div>
                <div className="jj">
                    <p className="btc">- Jira -</p>
                    <img className = "icon" src={Jira} alt="Jira" />
                </div>
                <div className="jj">
                    <p className="btc">- AWS Lambda -</p>
                    <img className = "icon" src={AWSLambda} alt="AWSLambda" />
                </div>
                <div className="jj">
                    <p className="btc">- Postman -</p>
                    <img className = "icon" src={Postman} alt="Postman" />
                </div>
                {/* <Link to= "/contact" className="btn"> Purchase </Link> */}
            </div>


        </div>
      
    </div>

    
  )
}

export default PricingCard
