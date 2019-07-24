import React from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';

export default class Navbar extends React.PureComponent {
  render() {
    return (
      <div className="nav">
        <ul className="nav-ul">
          <li>
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy
              smooth
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
              spy
              smooth
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
              spy
              smooth
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
