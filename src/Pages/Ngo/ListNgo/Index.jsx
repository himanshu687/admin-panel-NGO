import React, { useEffect, useState } from "react";
import MainUI from "../../Auth/MainUI/Index";
import HeadTitle from "../../../Components/HeadTitle/Index";
import LocationPath from "../../../Components/LocationPath";
import SearchSection from "../../../Components/searchSection/Index";
import WebUINgo from "./WebView/Index";
import MobileViewNGO from "./MobileView/Index";
import "./Index.css";
import { ngoController } from "../../../Api/Ngo/Controller";
import Spinner from "../../../Components/Spinner/Index";

const NgoList = () => {
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(true);

  const changeNgoStatus = (ngoExternalId, status) => {
    ngoController.changeNgoStatus(ngoExternalId, status).then((response) => {
      console.log("adfadf: ", response.data);
      getNgos();
    });
  };

  const getNgos = () => {
    ngoController
      .getNgos()
      .then((response) => {
        setNgos(response?.data);
      })
      .then(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getNgos();
  }, []);

  return (
    <MainUI>
      <LocationPath path="NGO" pathLink="ngo-list" subPath="NGO List" />
      <HeadTitle title="NGO List" />
      <div className="container">
        <SearchSection category={false} />

        <div className="tableContainerNGo my-3">
          <div className="desktopView">
            {loading ? (
              <Spinner />
            ) : (
              <WebUINgo ngos={ngos} changeNgoStatus={changeNgoStatus} />
            )}
          </div>

          <div className="mobileView">
            {loading ? (
              <Spinner />
            ) : (
              <MobileViewNGO ngos={ngos} changeNgoStatus={changeNgoStatus} />
            )}
          </div>
        </div>
      </div>
    </MainUI>
  );
};

export default NgoList;
