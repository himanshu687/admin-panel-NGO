import React from "react";
import "./Index.css";

const TableList = (props) => {
  return (
    <tr className="tableRowData">
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
        <button className="btn text-primary">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableList;
