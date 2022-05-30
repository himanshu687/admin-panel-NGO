import React from "react";
import { useNavigate } from "react-router-dom";

const NGOCardList = ({ sno, ngo, changeNgoStatus }) => {
  const navigate = useNavigate();

  const handleStatusChange = () => {
    const status = ngo.status;

    if (status === "APPROVE") {
      changeNgoStatus(ngo.ngoExternalId, "DECLINE");
    } else if (status === "DECLINE") {
      changeNgoStatus(ngo.ngoExternalId, "APPROVE");
    } else if (status === "PENDING") {
      changeNgoStatus(ngo.ngoExternalId, "APPROVE");
    }
  };

  const handleEditClick = () => {
    navigate("/edit-ngo", {
      state: { ngo },
    });
  };

  return (
    <div className="">
      <div className="card ngoCardData mb-4">
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <td className="text-muted border-end">Sr. No.</td>
                <td>{sno}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">NGO Name</td>
                <td>{ngo.ngoName}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Phone No.</td>
                <td>{ngo.phoneNo}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Address</td>
                <td>{`${ngo.address}, ${ngo.city}, ${ngo.state}, ${ngo.pinCode}`}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Status</td>
                <td
                  className={
                    (ngo.status === "APPROVE" && "text-success") ||
                    (ngo.status === "DECLINE" && "text-danger") ||
                    (ngo.status === "PENDING" && "text-warning")
                  }
                >
                  {ngo.status}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cardBtns text-end">
            {(ngo.status === "PENDING" || ngo.status === "DECLINE") && (
              <button
                onClick={handleStatusChange}
                className="btn btn-success me-2"
              >
                Activate
              </button>
            )}
            {ngo.status === "APPROVE" && (
              <button
                onClick={handleStatusChange}
                className="btn btn-danger me-2"
              >
                Decline
              </button>
            )}
            <button
              onClick={handleEditClick}
              className="btn btn-secondary ms-2 px-4"
              type="submit"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOCardList;
