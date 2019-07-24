import React from 'react';
import './ContactSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default class ContactSection extends React.PureComponent {
  render() {
    return (
      <div>
        <p>
          If you didn’t manage to contact me by the preferred ways of smoke signals or posting a cat
          picture on reddit, here are some alternative ways of contacting me
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
    );
  }
}
