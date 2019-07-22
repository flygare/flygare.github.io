import React from "react";
import "./WorkSection.scss";
import Graph from "./Graph";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Macbook extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      opened: true
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened
    });
  }

  render() {
    const { opened } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-xs-7">
            <div className="work-image-box">
              {opened && (
                <div>
                  <Graph />
                </div>
              )}
              {!opened && (
                <div className="project-info">
                  <p>
                    Proof of concept to visualize rated CDR's on a heat and
                    world map.
                  </p>
                  <p>
                    Main technologies: Scala, Angular, Grafana, Graphite,
                    Cassandra, Spark
                  </p>
                  <a href="https://github.com/qvantel/orcd">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="col-xs-5">
            <div className="work-info-box">
              <div className="project-name">orcD</div>
              <div className="read-more" onClick={this.toggleBox}>
                {opened && <div>read more</div>}
                {!opened && <div>read less</div>}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-5">
            <div className="work-info-box">
              <div className="project-name">foodi</div>
            </div>
          </div>
          <div className="col-xs-7">
            <div className="work-image-box">
              <div className="work-info-box">coming soon</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Macbook;
