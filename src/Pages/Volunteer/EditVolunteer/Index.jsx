import React from "react";
import "./Index.css";

const EditVolunteer = () => {
  return (
    <div className="formContainer">
      <h2>Edit Volunteer</h2>
      <div>
        <form className="volForm">
          <h4>Volunteer Details</h4>
          <div className="row my-2">
            <div className="col-md-6 col-sm-12">
              <input
                name="volName"
                type="text"
                placeholder="Volunteer Name"
                autoComplete="off"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6 col-sm-12 volDOB">
              <input
                type="date"
                placeholder="Date of Birth (Optional)"
                autoComplete="off"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Social Interests"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="submitBtn">
            <button className="btn btn-success">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVolunteer;
