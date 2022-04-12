import React from "react";
import "./Index.css";

const LocationPath = ({ path, subPath }) => {
  return (
    <div>
      <div className="locationPath d-flex align-items-center">
        <button className="btn">
          <i className="fa-solid fa-house-chimney"></i>
        </button>

        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>

        <button className="btn">{path}</button>
        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>

        <button className="btn">{subPath}</button>
      </div>
    </div>
  );
};

export default LocationPath;
