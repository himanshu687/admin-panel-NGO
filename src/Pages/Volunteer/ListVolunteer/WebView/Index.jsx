import React from "react";
import VolTableList from "../Volunteer/webIndex";
import volData from "./../volData";

const WebUIVolunteer = () => {
  return (
    <div>
      <table className="table table-bordered table-hover text-center my-auto">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Status</th>
            <th scope="col">#</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {volData.map((volunteer, index) => {
            return (
              <VolTableList
                key={index}
                sno={volunteer.sno}
                name={volunteer.name}
                email={volunteer.email}
                phone={volunteer.phone}
                dob={volunteer.dob}
                gender={volunteer.gender}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WebUIVolunteer;
