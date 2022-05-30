import React from "react";
import NgoTableList from "../Ngo/webIndex";

const WebUINgo = ({ ngos, changeNgoStatus }) => {
  return (
    <div>
      <table className="table table-bordered table-hover text-center my-auto">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">NGO Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">#</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {ngos.map((ngo, index) => {
            return (
              <NgoTableList
                key={ngo?.ngoExternalId}
                sno={index + 1}
                ngo={ngo}
                changeNgoStatus={changeNgoStatus}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WebUINgo;
