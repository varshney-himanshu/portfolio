import "bootstrap/scss/bootstrap-grid.scss";
import "./sass/main.scss";
import React, { Component } from "react";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
      </div>
    );
  }
}

export default App;
