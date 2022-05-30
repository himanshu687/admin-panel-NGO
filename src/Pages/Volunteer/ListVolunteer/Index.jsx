import React from "react";
import "./Index.css";
import HeadTitle from "../../../Components/HeadTitle/Index";
import LocationPath from "../../../Components/LocationPath";
import SearchSection from "../../../Components/searchSection/Index";
import MobileViewVolunteer from "./MobileView/Index";
import WebUIVolunteer from "./WebView/Index";
import MainUI from "../../Auth/MainUI/Index";

const VolunteerList = () => {
  return (
    <MainUI>
      <LocationPath path="Volunteer" pathLink="/" subPath="Volunteer List" />
      <HeadTitle title="Volunteer List" />
      <div className="container">
        <SearchSection />

        <div className="tableContainerVol my-3">
          <div className="desktopView">
            <WebUIVolunteer />
          </div>

          <div className="mobileView">
            <MobileViewVolunteer />
          </div>
        </div>
      </div>
    </MainUI>
  );
};

export default VolunteerList;
