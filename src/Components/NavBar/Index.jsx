import React from "react";
import "./Index.css";

const NavBar = ({ mobilePanelBtn }) => {
  // const [mobilePanel, setMobilePanel] = useState(false);

  const handlePanel = () => {
    mobilePanelBtn.current.click();
  };

  const mobilePanelView = () => {
    if (x.matches) {
      // setMobilePanel(true);
    } else {
      // setMobilePanel(false);
    }
  };

  let x = window.matchMedia("(max-width: 770px)");
  mobilePanelView(x);
  x.addEventListener("change", mobilePanelView);

  return (
    <nav className="navbar navbar-expand-lg topNavbar">
      <div className="container-fluid">
        <button onClick={handlePanel} className="mobilePanelBtn mobileView">
          <i className="fa-solid fa-bars fa-2xl"></i>
        </button>
        <h1 className="navbar-brand mb-0 mt-1">NGO Admin-Panel</h1>

        <button
          className="navbar-toggler navbarMenuBtn mt-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
          </span>
        </button>

        <div
          className="profileBtn collapse navbar-collapse my-2"
          id="navbarSupportedContent"
        >
          <button>
            <i className="fa-solid fa-user fa-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
