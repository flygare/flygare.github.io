"use client";

import { useState } from "react";
import "./WorkSection.scss";
import Graph from "../components/Graph";
import { Github } from "lucide-react";

export default function WorkSection() {
  const [infoOpen, setInfoOpen] = useState(true);
  return (
    <div>
      <div className="project-row">
        <div className="main">
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
                  <Github />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="info">
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
    </div>
  );
}
