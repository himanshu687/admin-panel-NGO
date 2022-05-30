import React from "react";
import { useNavigate } from "react-router-dom";
import "./Index.css";

const NgoTableList = ({ sno, ngo, changeNgoStatus }) => {
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
    <tr className="ngoTableRowData  align-middle">
      <td>{sno}</td>
      <td>{ngo.ngoName}</td>
      <td>{ngo.phoneNo}</td>
      <td>{`${ngo.address}, ${ngo.city}, ${ngo.state}, ${ngo.pinCode}`}</td>
      <td
        className={
          (ngo.status === "APPROVE" && "text-success") ||
          (ngo.status === "DECLINE" && "text-danger") ||
          (ngo.status === "PENDING" && "text-warning")
        }
      >
        {ngo.status}
      </td>
      <td onClick={handleStatusChange}>
        {(ngo.status === "PENDING" || ngo.status === "DECLINE") && (
          <button className="btn btn-success btn-sm">Activate</button>
        )}
        {ngo.status === "APPROVE" && (
          <button className="btn btn-danger btn-sm">Decline</button>
        )}
      </td>
      <td>
        <button
          onClick={handleEditClick}
          className="btn text-primary"
          type="button"
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </td>
    </tr>
  );
};

export default NgoTableList;
