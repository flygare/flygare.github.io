import "./AboutSection.scss";

export default function AboutSection() {
  return (
    <div>
      <div className="this-is">Software Engineer</div>
      <div className="name">Robin Flygare</div>
      <p>
        Graduated Blekinge Institute of Technology 2017 with a Bachelor of
        Science degree in Software Engineering. Interested in just about
        everything that has to do with software and always on the lookout for
        new things to learn.
      </p>
      <p>
        Currently working as a software consultant at{" "}
        <a href="https://www.swecogroup.com/">Sweco</a>, using my knowledge to
        help customers with technologies including Golang, JavaScript,
        OpenStreetMap and Postgresql.
      </p>
      <p>
        Previously worked with GraphQL, Vue and Java at{" "}
        <a href="https://www.ist.com">IST</a>. Before That I spent the summer
        working at <a href="https://www.qvantel.com">Qvantel</a>, creating a PoC
        using primarily Scala, Grafana and Elastic stack.
      </p>
      <p>
        Before, I have worked on multiple school projects with customers like
        Qvantel developing the orcD system,{" "}
        <a href="https://www.softhouse.se">Softhouse</a> creating an
        cable-viewing iOS app and creating an indoor navigation app at
        <a href="https://www.bth.se"> BTH</a> for Google Glass.
      </p>
    </div>
  );
}
