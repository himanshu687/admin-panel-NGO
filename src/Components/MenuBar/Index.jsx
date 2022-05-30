import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Index.css";

const MenuBar = ({ menuIsOpen, setMenuIsOpen, mobilePanelBtn }) => {
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

  let closeRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!closeRef?.current?.contains(event?.target)) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleClick = () => {
    setTimeout(() => {
      setMenuIsOpen(false);
    }, 250);
  };

  return (
    <div className="sideBarWrapper">
      <div className={`${menuIsOpen && "menuBarBackground"}`}></div>
      <div
        ref={closeRef}
        className={`menuBarContainer ${
          menuIsOpen ? "menuBarOpen" : "menuBarClose"
        }`}
      >
        <div className="menuBarTop" style={{ textAlign: "right" }}>
          <button
            ref={mobilePanelBtn}
            onClick={() => {
              setMenuIsOpen(!menuIsOpen);
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="menuBarBottom d-flex flex-column justify-content-between">
          <div className="menuItemWrapper">
            {menuBarItems.map((item, index) => {
              return (
                <div key={index}>
                  <Link
                    to={item.path}
                    onClick={handleClick}
                    className="menuBarItem"
                  >
                    <span className="barItemIcon text-center">{item.icon}</span>
                    {menuIsOpen && (
                      <span className="barItemTitle">{item.title}</span>
                    )}
                  </Link>
                  {menuIsOpen && <hr />}
                </div>
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
