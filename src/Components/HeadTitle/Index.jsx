import React from "react";
import "./Index.css";

const HeadTitle = ({ title }) => {
  return (
    <div>
      <div className="pageHeadTitle my-3 py-4 ps-3">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default HeadTitle;
