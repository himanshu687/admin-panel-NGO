import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const NgoTableList = (props) => {
  return (
    <tr className="ngoTableRowData  align-middle">
      <td>{props.sno}</td>
      {/* <td>{props.sno}</td> image*/}
      <td>{props.ngoName}</td>
      <td>{props.ownerName}</td>
      {/* <td>{props.panNo}</td> */}
      <td>{props.registrationNo}</td>
      <td>{props.phoneNo}</td>
      <td>{props.email}</td>
      {/* <td>{props.website}</td> */}
      <td>{props.address}</td>
      <td>Approved</td>
      <td>
        <button className="btn btn-success btn-sm">Activate</button>
      </td>
      <td>
        <Link to={`/edit-ngo`}>
          <button className="btn text-primary">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default NgoTableList;
