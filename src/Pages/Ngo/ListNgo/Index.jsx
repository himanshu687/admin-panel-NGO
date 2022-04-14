import React from "react";
import HeadTitle from "../../../Components/HeadTitle/Index";
import LocationPath from "../../../Components/LocationPath";
import SearchSection from "../../../Components/searchSection/Index";
import WebUINgo from "./WebView/Index";
import MobileViewNGO from "./MobileView/Index";
import "./Index.css";

const NgoList = () => {
  return (
    <div>
      <LocationPath path="NGO" pathLink="/" subPath="NGO List" />
      <HeadTitle title="NGO List" />
      <div className="container">
        <SearchSection category={false} />

        <div className="tableContainerNGo my-3">
          <div className="desktopView">
            {/* <WebUIVolunteer /> */}
            <WebUINgo />
          </div>

          <div className="mobileView">
            <MobileViewNGO />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoList;
