import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const MenuBar = ({ menuIsOpen, setMenuIsOpen }) => {
  const menuBarItems = [
    {
      path: "/dashboard",
      title: "Dashboard",
      icon: <i className="fa-solid fa-house"></i>,
    },
    {
      path: "/ngo-list",
      title: "NGO",
      icon: <i className="fa-solid fa-building-ngo fa-lg"></i>,
    },
    {
      path: "/volunteer-list",
      title: "Volunteer",
      icon: <i className="fa-solid fa-users"></i>,
    },
    {
      path: "/change-password",
      title: "Change Password",
      icon: <i className="fa-solid fa-key"></i>,
    },
  ];

  return (
    <div>
      <div
        className="menuBarContainer"
        style={{ width: menuIsOpen ? "22rem" : "6rem" }}
      >
        <div className="menuBarTop" style={{ textAlign: "right" }}>
          <button
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="menuBarBottom d-flex flex-column justify-content-between">
          <div>
            {menuBarItems.map((item, index) => {
              return (
                <Link to={item.path} key={index} className="menuBarItem ">
                  <span className="barItemIcon text-center">{item.icon}</span>
                  {menuIsOpen && (
                    <span className="barItemTitle">{item.title}</span>
                  )}
                </Link>
              );
            })}
          </div>

          <Link to="/logout" className="menuBarItem">
            <span className="barItemIcon text-center">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </span>
            {menuIsOpen && <span className="barItemTitle">Logout</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
