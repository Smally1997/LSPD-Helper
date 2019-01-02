import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import Main from "./Main.js";
import { UserContextProvider } from "./UserContext";
import { ToastContainer, Slide } from "react-toastify";
import $ from "jquery";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMinHeight: ""
    };
  }
  componentDidMount() {
    const navHeight = $("#navbar").innerHeight();
    const footerHeight = $("#footer").innerHeight();

    const mainMinHeight = `calc(100vh - ${navHeight}px - ${footerHeight}px)`;
    if (this.state.mainMinHeight != mainMinHeight) {
      this.setState({ mainMinHeight });
    }
  }

  render() {
    return (
      <div>
        <UserContextProvider>
          <ToastContainer
            hideProgressBar={true}
            autoClose={2500}
            transition={Slide}
          />
          <Navbar />
          <Main styles={{ minHeight: this.state.mainMinHeight }} />
          <Footer />
        </UserContextProvider>
      </div>
    );
  }
}

export default App;
