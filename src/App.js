import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <ul className="nav">
        <li>
          <Link
            className="nav-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <header className="App-header">
        <div className="content">
          <div id="about">
            <div className="this-is">Developer | UX | Blah ...</div>
            <div className="name">Robin Flygare</div>
            <p>
              Graduated at BTH with a bachelors degree in Software Engineering
              in 2017. Interested in just about everything that has to do with
              software and always on the lookout for new things to learn.
            </p>
            <p>
              Currently working to make the school hip with technologies such as
              GraphQL, Vue and Java at <a href="https://www.ist.com">IST</a>.
              Before IST I spent the summer working at{" "}
              <a href="https://www.qvantel.com">Qvantel</a>, creating a PoC
              using primarily Scala, Grafana and the Elastic stack.
            </p>
            <p>
              Previously worked on multiple school projects with customers like
              Qvantel (which you can read more about in the Orcd project
              section), <a href="https://www.softhouse.se">Softhouse</a>{" "}
              creating an cable-viewing iOS app and creating an indoor
              navigation app at <a href="https://www.bth.se">BTH</a> for Google
              Glass.
            </p>
          </div>

          <div id="work">
            <div className="subtitle">Work</div>
            <p>in progress</p>
          </div>
          <div id="contact">
            <div className="subtitle">Contact</div>
            <p>
              If you didn’t manage to contact me by the preferred ways of smoke
              signals or posting a cat picture on reddit, here are some
              alternative ways of contacting me
            </p>
            <div className="links">
              <a href="mailto:robin@flygare.me">robin@flygare.me</a>
              <a href="https://github.com/flygare/">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/robinflygare/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <p className="legal">Robin Flygare © {new Date().getFullYear()} </p>
        </div>
      </header>
    </div>
  );
}

// <img src={logo} className="App-logo" alt="logo" />
export default App;
