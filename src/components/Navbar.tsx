"use client";

import "./Navbar.scss";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <div className="nav">
      <ul className="nav-ul">
        <li>
          <ScrollLink
            className="nav-link"
            activeClass="active"
            to="about"
            spy
            smooth
            offset={0}
            duration={500}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className="nav-link"
            activeClass="active"
            to="work"
            spy
            smooth
            offset={0}
            duration={500}
          >
            Work
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            className="nav-link"
            activeClass="active"
            to="contact"
            spy
            smooth
            offset={0}
            duration={500}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}
