import React from "react";
import "./style.css";

function Explanation() {
  return (
    <div className="explanation">
      <h3>how it works</h3>
      <p>
        Discover the functionality and use of our device by watching the
        detailed video below. It provides a comprehensive guide on how to
        seamlessly integrate the device into your prayer routine.
      </p>
      <iframe
        width="512"
        height="410"
        src="https://www.youtube.com/watch?v=nsWSIpNU9Sg"
      ></iframe>
    </div>
  );
}

export default Explanation;
