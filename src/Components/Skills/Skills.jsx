import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="skill-bar">
              <li className="skill-item">
                <h3>HTML and CSS</h3>
                <div className="bar">
                  <span className="html"></span>
                  <div>
                    <p className="percent">90%</p>
                  </div>
                </div>
              </li>
              <li className="skill-item">
                <h3>Bootstrap</h3>
                <div className="bar">
                  <span className="bootstrap"></span>
                  <div className="percent">80%</div>
                </div>
              </li>
              <li className="skill-item">
                <h3>Javascript</h3>
                <div className="bar">
                  <span className="javascript"></span>
                  <div className="percent">80%</div>
                </div>
              </li>
              <li className="skill-item">
                <h3>ReactJS</h3>
                <div className="bar">
                  <span className="reactjs"></span>
                  <div className="percent">75%</div>
                </div>
              </li>
              <li className="skill-item">
                <h3>Angular</h3>
                <div className="bar">
                  <span className="angularjs"></span>
                  <div className="percent">70%</div>
                </div>
              </li>
              <li className="skill-item">
                <h3>NodeJS</h3>
                <div className="bar">
                  <span className="nodejs"></span>
                  <div className="percent">75%</div>
                </div>
              </li>
              <li className="skill-item">
                <h3>MongoDB</h3>
                <div className="bar">
                  <span className="mongodb"></span>
                  <div className="percent">75%</div>
                </div>
              </li>
              <li className="skill-item">
                <h3>C/C++</h3>
                <div className="bar">
                  <span className="c"></span>
                  <div className="percent">80%</div>
                </div>
              </li>
              <li className="skill-item">
                <h3>Python</h3>
                <div className="bar">
                  <span className="python"></span>
                  <div className="percent">65%</div>
                </div>
              </li>
              <li className="skill-item">
                <h3>Java</h3>
                <div className="bar">
                  <span className="java"></span>
                  <div className="percent">70%</div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
