import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <NavLink
      exact
      to={props.link}
      className={`px-2 capitalize hover:text-orange-mid ${
        props.col ? "py-2" : ""
      }`}
    >
      <p>{props.children}</p>
    </NavLink>
  );
};

export default NavItem;
