import React from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";

function SideNavbar({isNavExpanded,showNavbar,hideNavbar,isNavLocked,toggleNavbar}) {
  return(
     
    <div
    className={isNavExpanded ? "l-navbar show" : "l-navbar"}
    id="nav-bar"
    onMouseEnter={showNavbar}
    onMouseLeave={hideNavbar}
  >
    <nav className="nav">
      <div>
        <div className="mb-4 nav__logo">
          <a href="/" className="d-inline">
            <i className="bx bxs-school mr-3 nav__logo-icon"></i>
            <span className="nav__logo-name">LMS System</span>
          </a>
          <header
            className="d-md-block d-none float-right pr-3"
            id="header"
          >
            <div className="header__toggle">
              <i
                className={
                  isNavExpanded && isNavLocked
                    ? "bx bx-x"
                    : "bx bx-menu"
                }
                id="header-toggle"
                onClick={toggleNavbar}
              ></i>
            </div>
          </header>
        </div>

        <div className="nav__list">
          <NavLink
            to="/dashboard"
            activeClassName="sideActive"
            className="nav__link"
          >
            <i className="bx bxs-grid-alt nav__icon"></i>
            <span className="nav__name">Dashboard</span>
          </NavLink>

          <NavLink
            to="/classes"
            activeClassName="sideActive"
            className="nav__link"
          >
            <i className="bx bxs-chalkboard nav__icon"></i>
            <span className="nav__name">Classes</span>
          </NavLink>

          <NavLink
            to="/s/activities"
            activeClassName="sideActive"
            className="nav__link"
          >
            <i className="bx bx-task nav__icon"></i>
            <span className="nav__name">Activities</span>
          </NavLink>

          <NavLink
            to="/calendar"
            activeClassName="sideActive"
            className="nav__link"
          >
            <i className="bx bxs-message-square-detail nav__icon"></i>
            <span className="nav__name">Calendar</span>
          </NavLink>

          <NavLink
            to="/privateFiles"
            activeClassName="sideActive"
            className="nav__link"
          >
            <i className="bx bxs-folder nav__icon"></i>
            <span className="nav__name">Private Files</span>
          </NavLink>

          <NavLink
            to="/chat"
            activeClassName="sideActive"
            className="nav__link"
          >
            <i className="bx bxs-chat nav__icon"></i>
            <span className="nav__name">Chat</span>
          </NavLink>

          <NavLink
            to="/s/settings"
            activeClassName="sideActive"
            className="nav__link"
          >
            <i className="bx bxs-cog nav__icon"></i>
            <span className="nav__name">Settings</span>
          </NavLink>
        </div>
      </div>

      <a href="/" className="nav__link">
        <i className="bx bx-log-out nav__icon"></i>
        <span className="nav__name">Log Out</span>
      </a>
    </nav>
  </div>
 
  )
}

export default memo(SideNavbar);