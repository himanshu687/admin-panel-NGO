import React from "react";
import CardList from "../Volunteer/mobileIndex";
import volData from "../volData";

const MobileView = () => {
  return (
    <div>
      {volData.map((volunteer, index) => {
        return (
          <CardList
            key={index}
            sno={volunteer.sno}
            name={volunteer.name}
            email={volunteer.email}
            gender={volunteer.gender}
            dob={volunteer.dob}
          />
        );
      })}
    </div>
  );
};

export default MobileView;
