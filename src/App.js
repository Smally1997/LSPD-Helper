import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Main from "./Main.js";
import { UserContextProvider } from "./UserContext";

class App extends Component {
  render() {
    return (
      <div>
        <UserContextProvider>
          <Navbar />
          <Main />
        </UserContextProvider>
      </div>
    );
  }
}

export default App;
