import React from "react";
import LocationPath from "../../../Components/LocationPath";
import HeadTitle from "../../../Components/HeadTitle/Index";
import { Link } from "react-router-dom";
import "./Index.css";

const EditVolunteer = () => {
  return (
    <>
      <LocationPath
        path="Volunteer"
        pathLink="volunteer-list"
        subPath="Edit Volunteer"
      />
      <HeadTitle title="Edit Volunteer" backBtn={true} />
      <div className="container volFormContainer">
        <h4>Volunteer Details</h4>
        <div>
          <form className="volForm">
            <div className="row my-2">
              <div className="col-md-6 col-sm-12">
                <label>Name</label>
                <input
                  name="volName"
                  type="text"
                  placeholder="Volunteer Name"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-6 col-sm-12">
                <label>Phone No.</label>
                <input
                  type="text"
                  placeholder="Phone No."
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6 col-sm-12 volDOB">
                <label>Date of Birth</label>
                <input
                  type="date"
                  placeholder="Date of Birth (Optional)"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-6 col-sm-12">
                <label>Social Interests</label>
                <input
                  type="text"
                  placeholder="Social Interests"
                  autoComplete="off"
                />
              </div>
              <div className="col-md-6 col-sm-12 volStatus">
                <label>Status</label>
                <select
                    aria-label="Default select example"
                  >
                    <option defaultValue>Select Status</option>
                    <option value="1">Approved</option>
                      <option value="2">Pending</option>
                      <option value="3">Rejected</option>
                  </select>
              </div>
            </div>
            <div className="submitBtn">
              <button className="btn btn-success">Save Changes</button>
              <Link to="/ngo-list">
                <button className="btn btn-secondary ms-4">Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditVolunteer;
