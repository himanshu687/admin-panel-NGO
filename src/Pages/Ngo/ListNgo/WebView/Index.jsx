import React from "react";
import NgoTableList from "../Ngo/webIndex";
import ngoData from "../ngoData.json";

const WebUINgo = () => {
  return (
    <div>
      <table className="table table-bordered table-hover text-center my-auto">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">NGO Name</th>
            <th scope="col">Owner Name</th>
            {/* <th scope="col">PAN No.</th> */}
            <th scope="col">Registration No.</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Website</th> */}
            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">#</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {ngoData.map((ngo, index) => {
            return (
              <NgoTableList
                key={index}
                sno={ngo.sno}
                ngoName={ngo.ngoName}
                ownerName={ngo.ownerName}
                panNo={ngo.panNo}
                registrationNo={ngo.registrationNo}
                phoneNo={ngo.phoneNo}
                email={ngo.email}
                website={ngo.website}
                address={ngo.address}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WebUINgo;
