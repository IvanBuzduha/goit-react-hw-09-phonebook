import React from "react";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <NavLink to="/"></NavLink>
      <Navigation />
    </>
  );
};
export default Header;
