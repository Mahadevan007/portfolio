import React from "react";
import "./Home.css";
import { Animated } from "react-animated-css";

const Home = () => {
  return (
    <div>
      <div className="home-div">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="img-div">
                <img
                  src="https://i.ibb.co/G0Yy9w9/IMG-1394.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="content-div">
                <div className="row">
                  <div className="col-md-12">
                    <Animated animationIn="bounceInLeft" isVisible={true}>
                      <h3 className="name">A. S. Mahadevan</h3>
                    </Animated>
                    <Animated animationIn="bounceInRight">
                      <h3 className="work">Full Stack Developer</h3>
                    </Animated>
                  </div>
                </div>
              </div>
              <Animated animationIn="zoomInDown">
                <div className="icon-div">
                  <div className="row">
                    <div className="col-md-12">
                      <a
                        href="https://www.linkedin.com/in/mahadevan-sekar-638b26158/"
                        target="_blank"
                        className="icon-link"
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-linkedin icon"></i>
                      </a>
                      <a
                        href="https://github.com/Mahadevan007"
                        target="_blank"
                        className="icon-link"
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-github icon"></i>
                      </a>
                      <a
                        href="https://medium.com/@mahadevan98sekar"
                        target="_blank"
                        className="icon-link"
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-medium-m icon"></i>
                      </a>
                      <a
                        href="https://www.facebook.com/mahadevan.077"
                        target="_blank"
                        className="icon-link"
                        rel="noopener noreferrer"
                      >
                        <i class="fab fa-facebook-square icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Animated>
              <Animated>
                <div className="download-resume">
                  <a href="https://drive.google.com/uc?export=download&id=1Y5qzHTZoyWTDnB78N-JLeiaYbg4KC0IK">
                    <button className="btn btn-md download-button">
                      <h5>Download Resume</h5>
                    </button>
                  </a>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
      <div className="about-div">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="about-content">
                I'm a passionate <span>full stack developer</span> focusing on
                writing clean, elegant and efficient code. My expertise covers
                <span> HTML & CSS</span>, <span> Javascript</span>,
                <span> ReactJS</span>, <span> NodeJS</span>,
                <span> MongoDB </span>
                and
                <span> Angular</span> trained by <span>Zen Class </span> @
                <span> Guvi Geek Technologies</span> ,<span>IITMRP</span>
                <br />
                <br />
                <p>
                  I'm an avid Coder and learner, continuosly updating self on
                  the latest tools and technologies.
                  <br />I also have a keen eye for detail and my other skills
                  include intermediate knowledge on programing languages,
                  <span> C, C++</span> and <span>Java</span>
                </p>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://i.ibb.co/Qp9rvC0/18953686.png"
                alt="18953686"
                border="0"
                className="laptop-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
