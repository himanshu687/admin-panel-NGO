import React from "react";
import "./Index.css";

const SearchSection = () => {
  return (
    <div className="searchSection">
      <form>
        <div className="desktopView">
          <div className="d-flex justify-content-end py-3">
            <div className="me-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="me-3">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Select Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="me-3">
              <input placeholder="Search by name, phone" type="text" />
            </div>

            <button className="btn btn-success me-3" type="submit">
              Submit
            </button>

            <button className="btn btn-secondary me-3">Reset</button>
          </div>
        </div>

        <div className="mobileView">
          <div className="d-flex justify-content-between align-items-center">
            <div className="mSearchInput d-flex justify-content-between align-items-center">
              <input placeholder="Search by name, city" type="text" />
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <button className="mResetBtn btn mx-1">RESET</button>
          </div>

          <div className="mSelectInput d-flex justify-content-between align-items-center my-4">
            <div className="me-2">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Select Category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="ms-2">
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>Select Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchSection;
