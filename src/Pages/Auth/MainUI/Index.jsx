import React, { useRef, useState } from "react";
import MenuBar from "../../../Components/MenuBar/Index";
import NavBar from "../../../Components/Navbar/Index";

const MainUI = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const mobilePanelBtn = useRef(null);

  return (
    <div className="d-flex">
      <div>
        <MenuBar
          mobilePanelBtn={mobilePanelBtn}
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
        />
      </div>

      <div
        className="mainPageContainer flex-grow-1"
        style={{ marginLeft: menuIsOpen ? "22rem" : "6rem" }}
      >
        <NavBar mobilePanelBtn={mobilePanelBtn} />
        {children}
      </div>
    </div>
  );
};

export default MainUI;
