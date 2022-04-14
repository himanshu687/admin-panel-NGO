import React from "react";

const NGOCardList = (props) => {
    return (
      <div className="container">
        <div className="card ngoCardData mb-4">
          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-muted border-end">Sr. No.</td>
                  <td>{props.sno}</td>
                </tr>
                <tr>
                  <td className="text-muted border-end">NGO Name</td>
                  <td>{props.ngoName}</td>
                </tr>
                <tr>
                  <td className="text-muted border-end">Owner Name</td>
                  <td>{props.ownerName}</td>
                </tr>
                <tr>
                  <td className="text-muted border-end">PAN No.</td>
                  <td>{props.panNo}</td>
                </tr>
                <tr>
                  <td className="text-muted border-end">Registration No.</td>
                  <td>{props.registrationNo}</td>
                </tr>
                <tr>
                  <td className="text-muted border-end">Phone No.</td>
                  <td>{props.phoneNo}</td>
                </tr>
                <tr>
                  <td className="text-muted border-end">email</td>
                  <td>{props.email}</td>
                </tr>
                <tr>
                  <td className="text-muted border-end">Website</td>
                  <td>{props.website}</td>
                </tr>
                <tr>
                  <td className="text-muted border-end">Address</td>
                  <td>{props.address}</td>
                </tr>
              </tbody>
            </table>
            <div className="cardBtns text-end">
              <button className="btn btn-success me-2" type="submit">
                Activate
              </button>
              <button className="btn btn-secondary ms-2 px-4" type="submit">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default NGOCardList;
