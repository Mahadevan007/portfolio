import React from "react";
import { Animated } from "react-animated-css";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Animated animationIn="bounceIn" isVisible={true}>
              <a
                href="https://medium.com/@mahadevan98sekar/javascript-how-does-it-work-4787db650c50?source=friends_link&sk=9e2caaaac0adab03ae663944621e4ae6"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div class="card mb-3 blog-card" style={{ maxWidth: "540px" }}>
                  <div class="row no-gutters">
                    <div class="col-md-4 blog-img-div">
                      <img
                        src="https://miro.medium.com/max/256/1*hkUuAvHR211Pz--mL7qvqw.png"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">
                          Javascript. How does it work?
                        </h5>
                        <p class="card-text">
                          Whenever we learn a programming language it is
                          essential to learn how it works, what happens when we
                          compile it, how it gets stored, etc. In the case of
                          javascript, these are some of the factors on how it
                          works.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Animated>
          </div>
          <div className="col-md-4">
            <Animated animationIn="bounceIn" isVisible={true}>
              <a
                href="https://medium.com/@mahadevan98sekar/what-are-html-css-and-bootstrap-and-their-roles-in-web-development-eb20fa59c99c?source=friends_link&sk=03b801bd86716e81d957850ba13d3b30"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div class="card mb-3 blog-card" style={{ maxWidth: "540px" }}>
                  <div class="row no-gutters">
                    <div class="col-md-4 blog-img-div">
                      <img
                        src="https://miro.medium.com/max/798/1*rZarqbNgZ3L5iHNR8N8Zog.png"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">
                          What are HTML, CSS and Bootstrap and their roles in
                          Web Development?
                        </h5>
                        <p class="card-text">
                          HTML + CSS + BOOTSTRAP = AWESOME WEBSITE. Lets learn
                          how they help us to make an awesome website
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Animated>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
