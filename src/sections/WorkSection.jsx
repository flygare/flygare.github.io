import React from 'react';
import './WorkSection.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Graph from '../components/Graph';

export default class WorkSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      infoOpen: true,
    };
    this.toggleInfoOpen = this.toggleInfoOpen.bind(this);
  }

  toggleInfoOpen() {
    this.setState(prevState => ({
      infoOpen: !prevState.infoOpen,
    }));
  }

  render() {
    const { infoOpen } = this.state;
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
                  <p>Proof of concept to visualize rated CDRs on a heat and world map.</p>
                  <p>Main technologies: Scala, Angular, Grafana, Graphite, Cassandra, Spark</p>
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
                onClick={this.toggleInfoOpen}
                onKeyDown={this.toggleInfoOpen}
                aria-checked={infoOpen}
                role="switch"
                tabIndex={0}
              >
                {infoOpen && <div>read more</div>}
                {!infoOpen && <div>read less</div>}
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
