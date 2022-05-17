import React, { useState } from "react";
import "./WorkSection.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Graph from "../components/Graph";

export default function WorkSection() {
  const [infoOpen, setInfoOpen] = useState(true);
  return (
    <div>
      <div className="row">
        <div className="col-xs-7">
          <div className="work-image-box">
            {infoOpen && (
              <div>
                <Graph />
              </div>
            )}
            {!infoOpen && (
              <div className="project-info">
                <p>
                  Proof of concept to visualize rated CDRs on a heat and world
                  map.
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
            <div
              className="read-more"
              onClick={() => setInfoOpen(!infoOpen)}
              onKeyDown={() => setInfoOpen(!infoOpen)}
              aria-checked={infoOpen}
              role="switch"
              tabIndex={0}
            >
              {infoOpen && <div>read more</div>}
              {!infoOpen && <div>hide</div>}
            </div>
          </div>
        </div>
      </div>
      {/*       <div className="row">
        <div className="col-xs-5">
          <div className="work-info-box">
            <div className="project-name">project</div>
          </div>
        </div>
        <div className="col-xs-7">
          <div className="work-image-box">
            <div className="work-info-box">coming soon</div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
