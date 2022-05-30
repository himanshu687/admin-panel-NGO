import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NgoList from "./Pages/Ngo/ListNgo/Index";
import VolunteerList from "./Pages/Volunteer/ListVolunteer/Index";
import EditVolunteer from "./Pages/Volunteer/EditVolunteer/Index";
import EditNGO from "./Pages/Ngo/EditNgo/Index";
import MenuBar from "./Components/MenuBar/Index";
import NavBar from "./Components/Navbar/Index";
import { useRef, useState } from "react";
import Login from "./Pages/Auth/Login/Index";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const mobilePanelBtn = useRef(null);

  return (
    <BrowserRouter>
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

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<h1>HOME</h1>} />
            <Route path="/volunteer-list" element={<VolunteerList />} />
            <Route path="/edit-volunteer" element={<EditVolunteer />} />
            <Route path="/ngo-list" element={<NgoList />} />
            <Route path="/edit-ngo" element={<EditNGO />} />
            <Route path="/logout" element={<h1>LOGOUT</h1>} />
            <Route
              path="*"
              element={
                <main>
                  <h1
                    style={{
                      paddingTop: "50vh",
                      fontSize: "3rem",
                      textAlign: "center",
                    }}
                  >
                    There's nothing here!
                  </h1>
                </main>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
