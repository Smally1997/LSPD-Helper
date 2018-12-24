import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div id="footer">
      Made by{" "}
      <a href="https://pd.lsgov.io/forum/memberlist.php?mode=viewprofile&u=71969">
        Utensil
      </a>{" "}
      &copy; {new Date().getFullYear()}
    </div>
  );
};
