import "bootstrap/scss/bootstrap-grid.scss";
import "./sass/main.scss";
import React, { Component } from "react";
import Intro from "./components/intro/Intro";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Intro />
    </>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
