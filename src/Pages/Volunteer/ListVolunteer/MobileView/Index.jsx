import React from "react";
import CardList from "../Volunteer/mobileIndex";
import volData from "../volData";

const MobileViewVolunteer = () => {
  return (
    <div>
      {volData.map((volunteer, index) => {
        return (
          <CardList
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
    </div>
  );
};

export default MobileViewVolunteer;
