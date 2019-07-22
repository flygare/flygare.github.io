import React from "react";
import "./Macbook.scss";

class Macbook extends React.PureComponent {
  render() {
    return (
      <div className="macbook">
        <div className="display">
          <div className="screen">
            <video autoPlay>
              <source type="video/mp4" src="//i.imgur.com/9EZzoTu.mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <h1>MacBook Pro</h1>
        </div>
        <div className="base">
          <div className="indent" />
        </div>
        <div className="bottom" />
      </div>
    );
  }
}
export default Macbook;
