import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGithubSquare,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons"

import { 
    faFileAlt,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons"

function Main(){
    return(
        <div className="container main">
            <div>
                <img className ="me" alt="Me!" src={require('./img/me.jpg')}  />
                <h1 className="name">Kyle Horton</h1>
                <div className="row interests">
                    <div className="col-lg-6 eng">
                    <h3>Software Engineering</h3>
                    </div>
                     <div className="col-lg-6 baseball">
                     <h3>Baseball Analytics</h3>
                    </div>
                </div>
                <div className="row details">
                    <p className="mainText"> I am currently a Senior at Quinnipiac University studying Software Engineering at the 
                    Quinnipiac School of Engineering, with an expected graduation date of May 2020. Also minoring in both Mathematics and Business 
                    Management. I have experience in software development, web and app development, game development, and software quality assurance. 
                    I am a self-motivated learner and can pick up new technology fairly quickly. I hope to be able to utilize my diverse 
                    skillset and high energy to grow my career as well as strengthen my technological knowledge. Additionally, I 
                    have strong passion for baseball with interests in baseball operations and how data analysis can be used 
                    to make smarter and more effective decisions. In my free time, I enjoy writing MLB analysis articles where I 
                    will analyze a player's performance through the use of advanced metrics. You can find my work&nbsp;
                     <a target="_blank" value=""href={"https://www.pitcherlist.com/author/kyle-horton/"}>here.</a><br></br> <br></br>

                    Below you will find links to my LinkedIn, GitHub repository, email, and a pdf download of my résumé. For more information on
                    my work experience and projects, please click the 'Projects and Experience' tab above!
                    
                    </p>
                </div>
            </div>
            <div className="social-container">
                <a href="https://www.linkedin.com/in/kyle-horton-8113b5147/" className="linkedIn social" target="_blank">
                    <FontAwesomeIcon title="LinkedIn" size="3x" icon={faLinkedin}></FontAwesomeIcon>
                </a>

                <a href="https://github.com/KyleHorton" className="github social" target="_blank">
                    <FontAwesomeIcon title="GitHub Repository" size="3x" icon={faGithubSquare}></FontAwesomeIcon>
                </a>

                <a href="mailto:KyleRaymondHorton@gmail.com" className="envelope social" target="_blank">
                    <FontAwesomeIcon title="Email" size="3x" icon={faEnvelope}></FontAwesomeIcon>
                </a>

                <a className="file social" target="_blank" href="../pdf/Kyle_Horton_Resume.pdf" download="Kyle_Horton_Resume">
                    <FontAwesomeIcon title="Resume" size="3x" icon={faFileAlt}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    );
}

export default Main;