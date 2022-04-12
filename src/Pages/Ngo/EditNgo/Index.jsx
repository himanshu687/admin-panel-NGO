import React from "react";
import "./Index.css";

const EditNGO = () => {
  return (
    <div className="formContainer">
      <h2>Edit NGO</h2>
      <div>
        <form className="ngoForm">
          <div className="row my-2">
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
          <h4>NGO Details</h4>
          <div className="row my-2">
            <div className="col-md-6 col-sm-12">
              <input
                name="ngoName"
                type="text"
                placeholder="NGO Name"
                autoComplete="off"
              />
            </div>
            <div className="col-md-6 col-sm-12">
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
              <input type="text" placeholder="PAN No." autoComplete="off" />
            </div>
            <div className="col-md-6 col-sm-12">
              <input
                type="text"
                placeholder="Registration No."
                autoComplete="off"
              />
            </div>
          </div>

          <h4>Contact Details</h4>
          <div className="row my-2">
            <div className="col-md-6 col-sm-12">
              <input type="tel" placeholder="Phone No." autoComplete="off" />
            </div>
            <div className="col-md-6 col-sm-12">
              <input type="email" placeholder="Email" autoComplete="off" />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6 col-sm-12">
              <input type="url" placeholder="Website" autoComplete="off" />
            </div>
          </div>

          <h4>Address Details</h4>
          <div className="row my-2">
            <div className="col-md-6 col-sm-12">
              <input type="text" placeholder="Address" autoComplete="off" />
            </div>
            <div className="col-md-6 col-sm-12">
              <input type="text" placeholder="City" autoComplete="off" />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-6 col-sm-12">
              <input type="tel" placeholder="Pin Code" autoComplete="off" />
            </div>
            <div className="col-md-6 col-sm-12">
              <input type="text" placeholder="State" autoComplete="off" />
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

export default EditNGO;
