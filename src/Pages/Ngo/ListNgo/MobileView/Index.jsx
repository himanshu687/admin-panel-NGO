import React from "react";
import CardList from "../Ngo/mobileIndex";
const MobileViewNGO = ({ ngos, changeNgoStatus }) => {
  return (
    <div>
      {ngos.map((ngo, index) => {
        return (
          <CardList
            key={ngo?.ngoExternalId}
            sno={index + 1}
            // ngoExternalId={ngo?.ngoExternalId}
            // ngoName={ngo?.ngoName}
            // phoneNo={ngo?.phoneNo}
            // address={ngo?.address}
            // city={ngo?.city}
            // state={ngo?.state}
            // pincode={ngo?.pinCode}
            // status={ngo?.status}
            ngo={ngo}
            changeNgoStatus={changeNgoStatus}
          />
        );
      })}
    </div>
  );
};

export default MobileViewNGO;