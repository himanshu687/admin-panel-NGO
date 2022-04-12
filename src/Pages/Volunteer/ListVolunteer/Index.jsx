import React from "react";
import "./Index.css";
import HeadTitle from "../../../Components/HeadTitle/Index";
import LocationPath from "../../../Components/LocationPath";
import SearchSection from "../../../Components/searchSection/Index";
import WebUI from "./WebView/Index";
import MobileView from "./MobileView/Index";


const VolunteerList = () => {
  return (
    <div>
      <div className="container">
        <LocationPath path="Volunteer" subPath="Volunteer List" />

        <HeadTitle title="Volunteer List" />

        <SearchSection />

        <div className="tableContainer my-3">
          <div className="desktopView">
              <WebUI />
          </div>

          <div className="mobileView">
            <MobileView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerList;
