import React from "react";
import CardList from "../Ngo/mobileIndex";
import NGOData from "../ngoData";

const MobileViewNGO = () => {
  return (
    <div>
      {NGOData.map((ngo, index) => {
        return (
          <CardList
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
    </div>
  );
};

export default MobileViewNGO;