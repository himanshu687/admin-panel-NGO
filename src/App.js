import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NgoList from "./Pages/Ngo/ListNgo/Index";
import VolunteerList from "./Pages/Volunteer/ListVolunteer/Index";
import EditVolunteer from "./Pages/Volunteer/EditVolunteer/Index";
import EditNGO from "./Pages/Ngo/EditNgo/Index";
import MenuBar from "./Components/MenuBar/Index";
import NavBar from "./Components/Navbar/Index";
import { useState } from "react";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <BrowserRouter>
      <div>
        <div>
          <MenuBar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        </div>

        <div
          className="mainPageContainer"
          style={{ marginLeft: menuIsOpen ? "22rem" : "6rem" }}
        >
          <NavBar />

          <Routes>
            <Route path="/" element={<h1>HOME</h1>} />
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
                      fontSize: "1.2rem",
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
