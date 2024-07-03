import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import datarouter from "../router";

function Navbar() {
  return (
    <div className="mainlink">
      {datarouter[0].children.map((item, index) => (
        <NavLink to={item.path}>{item.title}</NavLink>
      ))}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
