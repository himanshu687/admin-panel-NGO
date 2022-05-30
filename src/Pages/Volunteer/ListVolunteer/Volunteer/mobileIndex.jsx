import React from "react";
import { Link } from "react-router-dom";

const CardList = (props) => {
  return (
    <div className="">
      <div className="card volCardData mb-4">
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <td className="text-muted border-end">Sr. No.</td>
                <td>{props.sno}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Name</td>
                <td>{props.name}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Email</td>
                <td>{props.email}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Phone No.</td>
                <td>{props.phone}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Date of Birth</td>
                <td>{props.dob}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Gender</td>
                <td>{props.gender}</td>
              </tr>
              <tr>
                <td className="text-muted border-end">Status</td>
                <td className="text-success">Approved</td>
              </tr>
            </tbody>
          </table>
          <div className="cardBtns text-end">
            <button className="btn btn-success me-2" type="submit">
              Activate
            </button>
            <Link to={`/edit-volunteer`}>
              <button className="btn btn-secondary ms-2 px-4" type="submit">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
