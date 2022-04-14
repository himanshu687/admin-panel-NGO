import React from "react";
import "./Index.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg topNavbar">
      <div className="container-fluid">
        <h1 className="navbar-brand mb-0">NGO Admin-Panel</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </button>

        <div
          className="profileBtn collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <button>
            <i className="fa-solid fa-user fa-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
