import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div id="page" className="home-container">
      <h1 className="header">LSPD Helper</h1>
      <h3>About</h3>
      <p>
        LSPD Helper simplifies the process of filling out forms, reports, and
        other documentation.
      </p>
      <h3>Setup</h3>
      <p>
        For first time use visit the <a href="#user">USER</a> tab and fill in
        all of the fields. For ease of use your information auto-saves and
        re-entry will only be required upon clearing your browser's cache.
      </p>
      <h3>Usage</h3>
      <p>
        Simply click any of the categories in the navigation bar and select the
        form you wish to fill out. Fill out the fields, and click 'Generate BB
        Code'. The title for the topic and the BB Code will be generated for you
        to easily copy and paste onto the forums!
      </p>
      <h3>Notice</h3>
      <p>
        LSPD Helper is an active work in progress, and certain forms are not yet
        integrated. These forms are still being worked on and will be enabled in
        the LSPD Helper when they are ready to be used. Certain forms may be
        greyed out/unclickable until they are ready to be used.
      </p>
      <h3>Contact</h3>
      <p>
        Every form and feature on LSPD Helper has been thoroughly tested prior
        to integration, but mistakes do happen. If you notice any
        bugs/errors/issues, please do not hesitate to contact me via{" "}
        <a href="https://pd.lsgov.io/forum/ucp.php?i=pm&mode=compose&u=71969">
          private message on the LSPD forums.
        </a>{" "}
      </p>
    </div>
  );
};
export default Home;
