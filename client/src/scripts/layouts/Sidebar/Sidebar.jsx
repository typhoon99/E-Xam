import React, { useState, Fragment } from "react";
// import { NavLink } from "react-router-dom";
import Navbar from "../../components/Sidebar/Navbar";
import SideNavbar from "../../components/Sidebar/SideNavbar";

function Sidebar({ show, component, menuArray }) {
  const [isNavExpanded, setNavExpanded] = useState(show);
  const [isNavLocked, setNavLocked] = useState(show);

  const showNavbar = () => {
    if (!isNavLocked) setNavExpanded(true);
  };
  const hideNavbar = () => {
    if (!isNavLocked) setNavExpanded(false);
  };
  const toggleNavbar = () => {
    setNavExpanded(isNavExpanded);
    setNavLocked(!isNavLocked);
  };
  const toggleMobileNavbar = () => {
    setNavExpanded(!isNavExpanded);
    setNavLocked(!isNavLocked);
  };

  return (
    <Fragment>
      <div className="mainContent">
        <div className={isNavExpanded ? "body-pd" : "body"} id="body-pd">
          <Navbar
            menuArray={menuArray}
            toggleMobileNavbar={toggleMobileNavbar}
            isNavExpanded={isNavExpanded}
          ></Navbar>
          
          <SideNavbar
            isNavExpanded={isNavExpanded}
            showNavbar={showNavbar}
            hideNavbar={hideNavbar}
            isNavLocked={isNavLocked}
            toggleNavbar={toggleNavbar}
          ></SideNavbar>
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default Sidebar;
