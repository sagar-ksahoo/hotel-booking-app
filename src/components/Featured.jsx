import React from "react";
import Featured1 from "../pics/featured-pic-1.webp";
import Featured2 from "../pics/featured-pic-2.webp";
import Featured3 from "../pics/featured-pic-3.webp";

import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={Featured1} alt="featured-img" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={Featured2} alt="featured-img" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={Featured3} alt="featured-img" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
