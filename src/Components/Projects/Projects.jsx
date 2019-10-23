import React from "react";
import { Animated } from "react-animated-css";
import "./Projects.css";

export default class Projects extends React.Component {
  render() {
    return (
      <section className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-md-offset-2">
              <Animated animationIn="bounceIn" isVisible={true}>
                <a
                  href="https://drive.google.com/file/d/1Fb4JxDY2RzZPg4nBspzv1zn7RtsCBKLg/view?usp=sharing"
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card project-card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">
                        Transmission Lines Surveillance Device
                      </h5>
                      <p className="card-text">
                        This is an IOT project where a device is used to
                        traverse through the line from the start to the end and
                        checks the line for defects or irregularities
                      </p>
                    </div>
                  </div>
                </a>
              </Animated>
            </div>
            <div className="col-md-4 col-md-offset-2">
              <Animated animationIn="bounceIn">
                <a
                  href="http://thor-chat-app.herokuapp.com/"
                  classname="chat-project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="card project-card chat"
                    style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Chat App using SOCKETIO</h5>
                      <p className="card-text">
                        This is a simple Chat App developed using SOCKETIO in
                        NodeJS and deployed using Heroku
                      </p>
                      <a
                        href="https://github.com/Mahadevan007/Chat-App-NodeJS"
                        className="card-link github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </a>
              </Animated>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
