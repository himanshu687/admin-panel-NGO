import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Index.css";

const HeadTitle = ({ title, backBtn }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="pageHeadTitle d-flex justify-content-between my-3 py-4 ps-3">
        <h2>{title}</h2>
        {backBtn && (
          <button className="me-5" onClick={handleBack}>
            View Listings
          </button>
        )}
      </div>
    </div>
  );
};

export default HeadTitle;
