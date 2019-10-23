import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Switch, Route } from "react-router-dom";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Blog from "./Blog/Blog";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} className="home-div" />
        <Route exact path="/education" component={Education} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  );
};

export default App;
