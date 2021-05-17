import React from "react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function ClassMenu({ title, urlName }) {
  return (
    <Fragment>
      <NavLink to={urlName} activeClassName="menuActive" className="menuLink">
        <span className="menuName">{title}</span>
      </NavLink>
    </Fragment>
  );
}

export default ClassMenu;
