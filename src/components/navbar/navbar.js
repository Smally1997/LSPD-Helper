import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function highlightNavLink(e) {
  let currentActiveNavLink = document.querySelector(".activeNavLink");
  if (currentActiveNavLink != null) {
    currentActiveNavLink.classList.remove("activeNavLink");
  }
  e.target.classList.toggle("activeNavLink");
}
const NavbarSection = ({ text, iconFontAwesome, link }) => {
  return (
    <div
      className="nav-section"
      onClick={e => {
        highlightNavLink(e);
      }}
    >
      <Link to={link}>
        <div>
          <i className={`${iconFontAwesome} navItemIcon`} />
          <div className="text">{text}</div>
        </div>
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
        <NavbarSection
          text={"FTP"}
          iconFontAwesome={"fas fa-school"}
          link={"/ftp"}
        />
      </div>
      <div className="home">
        <NavbarSection
          text={"LSPD HELPER"}
          iconFontAwesome={"fas fa-clipboard"}
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
