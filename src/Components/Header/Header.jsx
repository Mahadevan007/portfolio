import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// const Header = () => {
//   return (
//     // <div className="header">
//     //   <div className="options">
//     //     <Link className="option" to="/">
//     //       HOME
//     //     </Link>
//     //     <Link className="option" to="/education">
//     //       EDUCATION
//     //     </Link>
//     //     <Link className="option" to="/skills">
//     //       SKILLS
//     //     </Link>
//     //     <Link className="option" to="/project">
//     //       PROJECT
//     //     </Link>
//     //     <Link className="option" to="/contact">
//     //       CONTACT
//     //     </Link>
//     //   </div>
//     // </div>
//     <Nav
//       activeKey="/home"
//       onSelect={selectedKey => alert(`selected ${selectedKey}`)}
//     >
//       <Nav.Item>
//         <Nav.Link href="/home">Active</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-1">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="link-2">Link</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="disabled" disabled>
//           Disabled
//         </Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// };

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light transparent-nav">
        <div className="container">
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "grey" }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="options" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="options" to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="options" to="/skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="options" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="options" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
