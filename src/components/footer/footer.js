import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-item left">
        Made by{" "}
        <a href="https://pd.lsgov.io/forum/memberlist.php?mode=viewprofile&u=71969">
          Utensil
        </a>{" "}
        &copy; {new Date().getFullYear()}
      </div>
      <div className="footer-item">
        <a href="https://pd.lsgov.io/">LSPD Forums</a>
      </div>
      <div className="footer-item">
        <a href="https://forum.ls-rp.io/">LSRP Forums</a>
      </div>
    </div>
  );
};
