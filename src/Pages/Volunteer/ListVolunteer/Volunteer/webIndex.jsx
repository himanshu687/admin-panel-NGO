import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const VolTableList = (props) => {
  return (
    <tr className="volTableRowData align-middle">
      <td>{props.sno}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
      <td>{props.gender}</td>
      <td>Child Welfare</td>
      <td>Approved</td>
      <td>
        <button className="btn btn-success btn-sm">Activate</button>
      </td>
      <td>
        <Link to={`/edit-volunteer`}><button className="btn text-primary">
          <i className="fa-solid fa-pen-to-square"></i>
        </button></Link>
      </td>
    </tr>
  );
};

export default VolTableList;
