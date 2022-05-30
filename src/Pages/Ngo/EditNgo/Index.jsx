import React, { useState } from "react";
import LocationPath from "../../../Components/LocationPath";
import HeadTitle from "../../../Components/HeadTitle/Index";
import { useLocation, useNavigate } from "react-router-dom";
import "./Index.css";
import MainUI from "../../Auth/MainUI/Index";

const EditNGO = () => {
  const { state } = useLocation();
  const { ngo } = state;
  const navigate = useNavigate();

  const [ngoData, setNgoData] = useState({
    ngoName: ngo.ngoName,
    phoneNo: ngo.phoneNo,
    address: ngo.address,
    city: ngo.city,
    state: ngo.state,
    pinCode: ngo.pinCode,
    status: ngo.status,
    email: ngo.email,
    logo: ngo.logo,
    ngoExternalId: ngo.ngoExternalId,
    ownerName: ngo.ownerName,
    panNo: ngo.panNo,
    registrationCertificate: ngo.registrationCertificate,
    registrationNo: ngo.registrationNo,
    website: ngo.website,
  });

  const handleChange = (e) => {
    setNgoData({ ...ngoData, [e.target.name]: e.target.value });
  };

  return (
    <MainUI>
      <LocationPath path="NGO" pathLink="ngo-list" subPath="Edit NGO" />
      <HeadTitle title="Edit NGO" backBtn={true} />
      
      <div className="container formContainer">
        <h4>NGO Details</h4>
        <div>
          <form className="ngoForm">
            <div className="row my-3">
              <div className="col-md-6 col-sm-12">
              jhkjhkj
                <div className="fileInputs">
                  <label htmlFor="logo">
                    NGO Logo
                    <img src="/resources/images/upload.png" alt="icon" />
                  </label>
                  <input id="logo" type="file" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
              dgsfdgsfg
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
                    value={ngoData?.ngoName}
                    onChange={handleChange}
                    type="text"
                    placeholder="NGO Name"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>Owner Name</label>
                  <input
                    name="ownerName"
                    value={ngoData?.ownerName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Owner Name"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-6 col-sm-12">
                  <label>PAN No.</label>
                  <input
                    name="panNo"
                    value={ngoData?.panNo}
                    onChange={handleChange}
                    type="text"
                    placeholder="PAN No."
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>Registration No.</label>
                  <input
                    name="registrationNo"
                    value={ngoData?.registrationNo}
                    onChange={handleChange}
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
                    name="phoneNo"
                    value={ngoData?.phoneNo}
                    onChange={handleChange}
                    type="number"
                    placeholder="Phone No."
                    autoComplete="off"
                    pattern="\d*"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>Email</label>
                  <input
                    name="email"
                    value={ngoData?.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-6 col-sm-12">
                  <label>Website</label>
                  <input
                    name="website"
                    value={ngoData?.website}
                    onChange={handleChange}
                    type="url"
                    placeholder="Website"
                    autoComplete="off"
                  />
                </div>
              </div>

              <h4>Address Details</h4>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <label>Address</label>
                  <input
                    name="address"
                    value={ngoData?.address}
                    onChange={handleChange}
                    type="text"
                    placeholder="Address"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>City</label>
                  <input
                    name="city"
                    value={ngoData?.city}
                    onChange={handleChange}
                    type="text"
                    placeholder="City"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-6 col-sm-12">
                  <label>Pin Code</label>
                  <input
                    name="pinCode"
                    value={ngoData?.pinCode}
                    onChange={handleChange}
                    type="number"
                    placeholder="Pin Code"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>State</label>
                  <input
                    name="state"
                    value={ngoData?.state}
                    onChange={handleChange}
                    type="text"
                    placeholder="State"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-6 col-sm-12 mt-5">
                  <label>Status</label>
                  <select
                    name="status"
                    value={ngoData?.status}
                    onChange={handleChange}
                    aria-label="Default select example"
                  >
                    <option defaultValue>Select Status</option>
                    <option value="APPROVE">APPROVED</option>
                    <option value="PENDING">PENDING</option>
                    <option value="DECLINE">DECLINED</option>
                  </select>
                </div>
              </div>
              <div className="submitBtnNGO">
                <button type="submit" className="btn btn-success">Save Changes</button>
                <button
                  onClick={() => navigate(-1)}
                  type="button"
                  className="btn btn-secondary ms-4"
                >
                  Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainUI>
  );
};

export default EditNGO;
