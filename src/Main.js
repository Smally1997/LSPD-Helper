import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../src/components/home/home";
import User from "../src/components/user/user";
import Warrants from "../src/components/warrants/warrants";
import Reports from "../src/components/reports/reports";

const Main = ({ styles }) => (
  <main style={styles}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/warrants" component={Warrants} />
      <Route path="/reports" component={Reports} />
    </Switch>
  </main>
);

export default Main;
