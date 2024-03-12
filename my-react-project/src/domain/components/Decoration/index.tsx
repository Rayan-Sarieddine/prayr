import React from "react";
import "./style.css";
function Decoration() {
  const arrayOfDivs = Array.from({ length: 34 }, (_, index) => index);
  return (
    <div className="decoration">
      {arrayOfDivs.map((item, index) => {
        return <div key={index} className="decoration-div"></div>;
      })}
    </div>
  );
}

export default Decoration;
