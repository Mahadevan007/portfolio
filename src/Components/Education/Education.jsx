import React from "react";
import "./Education.css";
import { Animated } from "react-animated-css";

const Education = () => {
  return (
    <section className="education">
      <div className="timeline">
        <ul>
          <li>
            <Animated animationIn="bounceInLeft" isVisible={true}>
              <div className="content">
                <h3>Sri Muthukumaran Institute Of Technology, Mangadu</h3>
                <p>
                  Completed my Bachelor Degree in Computer Science Engineering
                  with 7.2 CGPA.
                </p>
              </div>
            </Animated>
            <Animated>
              <div className="time">
                <h4>2015-2019</h4>
              </div>
            </Animated>
          </li>
          <li>
            <Animated animationIn="bounceInRight" isVisible={true}>
              <div className="content">
                <h3>St.Bedes Anglo Indian Higher Secondary School</h3>
                <p>Completed my Higher Secondary 12th with 75%</p>
              </div>
            </Animated>
            <Animated isVisible={true}>
              <div className="time">
                <h4>2015</h4>
              </div>
            </Animated>
          </li>
          <li>
            <Animated animationIn="bounceInLeft" isVisible={true}>
              <div className="content">
                <h3>St.Bedes Anglo Indian Higher Secondary School</h3>
                <p>Completed my Senior Secondary 10th with 90%</p>
              </div>
            </Animated>
            <Animated>
              <div className="time">
                <h4>2013</h4>
              </div>
            </Animated>
          </li>
          <div style={{ clear: "both" }}></div>
        </ul>
      </div>
    </section>
  );
};

export default Education;
