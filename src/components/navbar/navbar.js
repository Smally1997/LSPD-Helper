import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavbarSection = ({ text, iconFontAwesome, link }) => {
  return (
    <div className="nav-section">
      <Link to={link}>
        <i className={`${iconFontAwesome} navItemIcon`} />
        <div className="text">{text}</div>
      </Link>
    </div>
  );
};
const Navbar = ({ user }) => {
  return (
    <div id="navbar">
      <div className="nav-items">
        <NavbarSection
          text={"REPORTS"}
          iconFontAwesome={"fas fa-file-invoice"}
          link={"/reports"}
        />
        <NavbarSection
          text={"WARRANTS"}
          iconFontAwesome={"fas fa-gavel"}
          link={"/warrants"}
        />
      </div>
      <div className="home">
        <NavbarSection
          text={"LSPD HELPER"}
          iconFontAwesome={"fas fa-building"}
          link={"/"}
        />
      </div>
      <div className="user">
        <NavbarSection
          text={"USER"}
          iconFontAwesome={"fas fa-id-badge"}
          link={"/user"}
        />
      </div>
    </div>
  );
};

export default Navbar;
