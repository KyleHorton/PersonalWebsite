import React from 'react';
import './App.css';

function Work(){
    return(
        <div className="container work">
            <div className="row justify-content-center">
                <h1 className="work-header">Work Experience and Project History</h1>
            </div>
            <div className="row education">
                <div className="col-sm-3 first-col">
                    <p className="ed-1">Education</p>
                </div>
                <div class="col-sm-9 second-col">
                    <div className="row mlb">
                        <div class="col-sm-9">
                            <p className="">Bachelors in Software Engineering, Minors in Mathematics/Management</p>
                            </div>
                            <div class="col-sm-3">
                            <p className="year">Summer 2019</p>
                        </div>
                    </div>
                    <div className="row ed-3">
                        <p className="">Quinnipiac University</p>
                    </div>
                </div>
            </div>
            <div className="row technologies">
                <div className="col-sm-3 first-col">
                    <p className="ed-1">Technologies</p>
                </div>
                <div className="col-sm-9 second-col">
                    <div className="row">
                        <div class="col-sm-3 second-col">
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>SQL</li>
                                <li>C#</li>
                            </ul> 
                        </div>
                        <div class="col-sm-3 second-col">
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>Node</li>
                            </ul> 
                        </div>
                        <div class="col-sm-3 second-col">
                            <ul>
                                <li>Unity</li>
                                <li>Android Studio</li>
                                <li>Git</li>
                                <li>Perforce</li>
                            </ul> 
                        </div>
                        <div class="col-sm-3 second-col">
                            <ul>
                                <li>Microsoft Office</li>
                                <br></br>
                                <br></br>
                                <br></br>
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row workExp">
                <div className="col-sm-3 first-col-work">
                    <p className="ed-1">Work Experience</p>
                </div>
                <div class="col-sm-9 second-col">
                    <div className="row mlb">
                        <div class="col-sm-9">
                            <p className="">MLB Avanced Media</p>
                        </div>
                        <div class="col-sm-3">
                            <p className="year">Summer 2019</p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mlb-2">Gaming/VR Engineer Intern</p>
                    </div>
                    <div className="row desc">
                        <ul>
                            <li>Worked alongside talented game design engineers to develop RBI Baseball ’20,
                                an arcade-style baseball game available on XB1, PS4, Android, iOS, and Nintendo Switch</li>
                            <li> Developed using Unity and C#, while using Perforce to ensure proper version control and agile methodologies
                            </li>
                            <li>Focused on gameplay implementations, specifically new pickoff, base running, and stealing mechanics for XB1 and PS4
                            </li>
                            <li>Leveraged knowledge in C# programming, Unity debugging, Perforce version control, team working experience</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row project">
                <div className="col-sm-3 first-col-work">
                    <p className="ed-1">Project History</p>
                </div>
                <div class="col-sm-9 second-col">
                    <div className="row mlb">
                        <div class="col-sm-9">
                            <p className="">NARAP Capstone Project</p>
                        </div>
                        <div class="col-sm-3">
                            <p className="year">Fall 2019 - Current</p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mlb-2">Web Application</p>
                    </div>
                    <div className="row desc">
                        <ul>
                            <li>Working within a small team to develop a new website for a clinical research organization that allows users to 
                                view research data and analysis</li>
                            <li>Developed the front-end in HTML/CSS including Bootstrap and Vue.js</li>
                            <li>Retrieved research data through API calls from a MySQL database</li>
                            <li>Designed a MongoDB schema for organization members to login and track progress</li>
                            <li>Developed iteratively though the use of Scrum</li>
                            <li>Utilized: HTML/CSS, JavaScript, AWS, JSON, Mongoose, MongoDB, Vue.js, Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row projectNext">
                <div className="col-sm-3 first-col-work">
                    <p className="ed-1"></p>
                </div>
                <div class="col-sm-9 second-col">
                    <div className="row mlb">
                        <div class="col-sm-9">
                            <p className="">Reds 2019 Hitter Dashboard</p>
                        </div>
                        <div class="col-sm-3">
                            <p className="year">Fall 2019</p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mlb-2">Python/SQL Dashboard App</p>
                    </div>
                    <div className="row desc">
                        <ul>
                            <li>Produced a dashboard view analyzing the 2019 Cincinnati Reds Hitters</li>
                            <li>Created graphical and visual analysis of player and team comparisons</li>
                            <li>Constructed a relational database to hold player information with MySQL and Amazon Web Services</li>
                            <li>Utilized: Python, MySQL, Plotly, AWS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row projectNext">
                <div className="col-sm-3 first-col-work">
                    <p className="ed-1"></p>
                </div>
                <div class="col-sm-9 second-col">
                    <div className="row mlb">
                        <div class="col-sm-9">
                            <p className="">Computing Club Website</p>
                        </div>
                        <div class="col-sm-3">
                            <p className="year">Spring 2019</p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mlb-2">Website</p>
                    </div>
                    <div className="row desc">
                        <ul>
                            <li>Produced a website to be used by the Quinnipiac Computing Club</li>
                            <li>System designed following MVC architecture</li>
                            <li>Integrated AngularJS framework to design and develop the front end</li>
                            <li>Designed RESTful backend server with Mongoose and MongoDB</li>
                            <li>Utilized: Angular, JavaScript, Mongoose, MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row projectNext">
                <div className="col-sm-3 first-col-work">
                    <p className="ed-1"></p>
                </div>
                <div class="col-sm-9 second-col">
                    <div className="row mlb">
                        <div class="col-sm-9">
                            <p className="">ICU Healthcare Flowsheet</p>
                        </div>
                        <div class="col-sm-3">
                            <p className="year">Fall 2018</p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mlb-2">Web App</p>
                    </div>
                    <div className="row desc">
                        <ul>
                            <li>Created a cardiac arrest flow sheet to assist nursing students during their clinical practice</li>
                            <li>Developed in HTML/CSS and JavaScript</li>
                            <li>Incorporated user-friendly forms and data storage through the use of sessionStorage</li>
                            <li>Utilized: HTML/CSS, JavaScript (JQuery)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row projectNext">
                <div className="col-sm-3 first-col-work">
                    <p className="ed-1"></p>
                </div>
                <div class="col-sm-9 second-col">
                    <div className="row mlb">
                        <div class="col-sm-9">
                            <p className="">Prolific Library</p>
                        </div>
                        <div class="col-sm-3">
                            <p className="year">Spring 2018</p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mlb-2">Android App</p>
                    </div>
                    <div className="row desc">
                        <ul>
                            <li>Developed an Android app that allows users to search, favorite, and checkout books from an online library</li>
                            <li>Integrated a REST Client called Retrofit to make HTTP requests to a REST API</li>
                            <li>Incorporated persistent data storage to archive favorite books</li>
                            <li>Utilized: Android Studio, Java, XML, Retrofit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row projectLast">
                <div className="col-sm-3 first-col-work">
                    <p className="ed-1"></p>
                </div>
                <div class="col-sm-9 second-col">
                    <div className="row mlb">
                        <div class="col-sm-9">
                            <p className="">Wave Game Overhaul Project</p>
                        </div>
                        <div class="col-sm-3">
                            <p className="year">Fall 2017</p>
                        </div>
                    </div>
                    <div className="row">
                        <p className="mlb-2">Java App</p>
                    </div>
                    <div className="row desc">
                        <ul>
                            <li>Improved upon an existing single player animated game, with a team of four members, 
                                to meet a set of the customer requirements</li>
                            <li>Developed through Scrum methodologies</li>
                            <li>Acted as Scrum leader by organizing directing all the actions of the team, ensuring the team stayed on track, 
                                finished action reports, and completed work units by the set deadlines</li>
                            <li>Utilized: Java, Eclipse, Scrum</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Work;