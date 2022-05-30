import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NgoList from "./Pages/Ngo/ListNgo/Index";
import VolunteerList from "./Pages/Volunteer/ListVolunteer/Index";
import EditVolunteer from "./Pages/Volunteer/EditVolunteer/Index";
import EditNGO from "./Pages/Ngo/EditNgo/Index";
import Login from "./Pages/Auth/Login/Index";
import MainUI from "./Pages/Auth/MainUI/Index";

function App() {
  return (
    <BrowserRouter>
      <MainUI>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
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
      </MainUI>
    </BrowserRouter>
  );
}

export default App;
