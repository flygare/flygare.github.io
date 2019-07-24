import React from "react";
import "./AboutSection.scss";

export default class AboutSection extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="this-is">Software Engineer</div>
        <div className="name">Robin Flygare</div>
        <p>
          Graduated at BTH with a bachelors degree in Software Engineering in
          2017. Interested in just about everything that has to do with software
          and always on the lookout for new things to learn.
        </p>
        <p>
          Currently working to make the school hip with technologies such as
          GraphQL, Vue and Java at <a href="https://www.ist.com">IST</a>. Before
          IST I spent the summer working at{" "}
          <a href="https://www.qvantel.com">Qvantel</a>, creating a PoC using
          primarily Scala, Grafana and the Elastic stack.
        </p>
        <p>
          Previously worked on multiple school projects with customers like
          Qvantel (which you can read more about in the Orcd work section),{" "}
          <a href="https://www.softhouse.se">Softhouse</a> creating an
          cable-viewing iOS app and creating an indoor navigation app at{" "}
          <a href="https://www.bth.se">BTH</a> for Google Glass.
        </p>
      </div>
    );
  }
}
