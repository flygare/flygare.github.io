import "./ContactSection.scss";
import { Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <div>
      <p>
        If you didn’t manage to contact me by the preferred ways of smoke
        signals or posting a cat picture on reddit, here are some alternative
        ways of contacting me
      </p>
      <div className="links">
        <a href="mailto:robin.flygare1@gmail.com">robin.flygare1@gmail.com</a>
        <a href="https://github.com/flygare/">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/robinflygare/">
          <Linkedin />
        </a>
      </div>
    </div>
  );
}
