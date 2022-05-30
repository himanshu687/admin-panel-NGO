import React from "react";
import LocationPath from "../../../Components/LocationPath";
import HeadTitle from "../../../Components/HeadTitle/Index";
import { Link } from "react-router-dom";
import "./Index.css";

const EditNGO = () => {
  return (
    <>
      <LocationPath path="NGO" pathLink="ngo-list" subPath="Edit NGO" />
      <HeadTitle title="Edit NGO" backBtn={true} />
      <div className="container formContainer">
        <h4>NGO Details</h4>
        <div>
          <form className="ngoForm">
            <div className="row my-3">
              <div className="col-md-6 col-sm-12">
                <div className="fileInputs">
                  <label htmlFor="logo">
                    NGO Logo
                    <img src="/resources/images/upload.png" alt="icon" />
                  </label>
                  <input id="logo" type="file" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="fileInputs">
                  <label htmlFor="pdf">
                    Reg. Certificate PDF
                    <img src="/resources/images/pdf.png" alt="icon" />
                  </label>
                  <input id="pdf" type="file" />
                </div>
              </div>
            </div>
            <div className="formDetails">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <label>NGO Name</label>
                  <input
                    name="ngoName"
                    type="text"
                    placeholder="NGO Name"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>Owner Name</label>
                  <input
                    name="ownerName"
                    type="text"
                    placeholder="Owner Name"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-6 col-sm-12">
                  <label>PAN No.</label>
                  <input type="text" placeholder="PAN No." autoComplete="off" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>Registration No.</label>
                  <input
                    type="text"
                    placeholder="Registration No."
                    autoComplete="off"
                  />
                </div>
              </div>

              <h4>Contact Details</h4>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <label>Phone No.</label>
                  <input
                    type="tel"
                    placeholder="Phone No."
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>Email</label>
                  <input type="email" placeholder="Email" autoComplete="off" />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-6 col-sm-12">
                  <label>Website</label>
                  <input type="url" placeholder="Website" autoComplete="off" />
                </div>
              </div>

              <h4>Address Details</h4>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <label>Address</label>
                  <input type="text" placeholder="Address" autoComplete="off" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>City</label>
                  <input type="text" placeholder="City" autoComplete="off" />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-6 col-sm-12">
                  <label>Pin Code</label>
                  <input type="tel" placeholder="Pin Code" autoComplete="off" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>State</label>
                  <input type="text" placeholder="State" autoComplete="off" />
                </div>
              </div>
              <div className="row my-2">
              <div className="col-md-6 col-sm-12 mt-5">
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
              <div className="submitBtnNGO">
                <button className="btn btn-success">Save Changes</button>
                <Link to={`/volunteer-list`}>
                  <button className="btn btn-secondary ms-4">Back</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditNGO;
