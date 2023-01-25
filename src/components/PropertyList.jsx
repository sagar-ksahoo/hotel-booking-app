import React from "react";
import property1 from "../pics/property1.webp";
import property2 from "../pics/property2.jpg";
import property3 from "../pics/property3.jpg";
import property4 from "../pics/property4.jpg";
import property5 from "../pics/property5.jpg";

import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={property1} alt="property-img" className="pListImg" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={property2} alt="property-img" className="pListImg" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={property3} alt="property-img" className="pListImg" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={property4} alt="property-img" className="pListImg" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={property5} alt="property-img" className="pListImg" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
