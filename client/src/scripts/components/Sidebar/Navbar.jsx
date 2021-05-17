import React from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import ClassMenu from "./ClassMenu";

function Navbar({menuArray,toggleMobileNavbar,isNavExpanded}) {
  return(
   
    <nav className="navbarTop navbar navbar-expand-lg navbar-light navbarSticky rounded">
    <div className="container-fluid">
      <header className="d-flex" id="header">
        <div className="header-mb">
          <i
            className={
              isNavExpanded
                ? "bx bx-dots-vertical-rounded d-lg-none d-block"
                : "bx bx-menu d-lg-none d-block"
            }
            id="header-mb"
            onClick={()=>toggleMobileNavbar()}
          ></i>
        </div>
      </header>

      {menuArray !== undefined && menuArray.length !== 0 ? (
        <div className="classRoomMenuDesktop d-none d-md-flex">
          <div className="classMenu">
            {menuArray.map((menu) => (
              <ClassMenu
                key={menu.id}
                title={menu.title}
                urlName={menu.urlName}
              ></ClassMenu>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="bx bxs-bell bx-sm"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="bx bx-list-ul bx-sm"></i>
            </a>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/profile/view">
              <i className="bx bxs-user-circle bx-sm "></i>
            </NavLink>
          </li>
        </ul>
      </div>
      <li className="nav-item d-block d-lg-none">
        <NavLink className="nav-link text-secondary" to="/profile/view">
          <i className="bx bxs-user-circle bx-md "></i>
        </NavLink>
      </li>
    </div>
    {menuArray !== undefined && menuArray.length !== 0 ? (
      <div className="classRoomMenuMobile d-flex d-md-none">
        <div className="classMenu">
          {menuArray.map((menu) => (
            <ClassMenu
              key={menu.id}
              title={menu.title}
              urlName={menu.urlName}
            ></ClassMenu>
          ))}
        </div>
      </div>
    ) : (
      ""
    )}
  </nav>

  )
}

export default memo(Navbar);