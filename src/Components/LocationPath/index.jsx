import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const LocationPath = ({ path, pathLink, subPath }) => {
  return (
    <div className="my-4">
      <div className="locationPath d-flex align-items-center mt-3">
        <Link to="/dashboard">
          <button className="ms-3 mx-2">
            <i className="fa-solid fa-house-chimney"></i>
          </button>
        </Link>

        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>

        <Link to={`/${pathLink}`}>
          <button className="mx-2">{path}</button>
        </Link>
        <span>
          <i className="fa-solid fa-angle-right"></i>
        </span>

        <button className="mx-2">{subPath}</button>
      </div>
    </div>
  );
};

export default LocationPath;
