import "./Graph.scss";

export default function Graph() {
  return (
    <div className="graph-wrapper">
      <div className="coordinates">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <svg width="85%" height="107px" viewBox="0 0 315 107" version="1.1">
        <defs>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="100%"
            id="linearGradient-1"
          >
            <stop stopColor="#2090F8" offset="0%" />
            <stop stopColor="#01FCE4" offset="41.7610013%" />
            <stop stopColor="#0BFF8C" offset="78.6870217%" />
            <stop stopColor="#89E393" offset="100%" />
          </linearGradient>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M2.10546875,95.75 L40.5546875,68.3476562 L55.2109375,81.1796875 L65.2148437,76.3945312 L96.1835937,86.8320312 L131.023438,19.9414062 L142.15625,23.7226562 L183.605469,2.1953125 L211.007812,22.3320312 L234.320312,71.5664062 L234.667969,83.0039062 L244.019531,83.0039062 L247.105469,88.8320312 L312.695312,104.839844"
            id="Path-1"
            stroke="url(#linearGradient-1)"
            strokeWidth="4"
            className="path"
          />
        </g>
      </svg>
    </div>
  );
}
