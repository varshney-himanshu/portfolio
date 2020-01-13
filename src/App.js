import "./sass/main.scss";
import React, { Component } from "react";
import logo from "./assets/signature-white.png";

class App extends Component {
  render() {
    return (
      <div>
        <div class="nav">
          <input
            id="nav-toggle"
            type="checkbox"
            class="nav__checkbox"
            // eslint-disable-next-line no-script-url
            href="javascript:void()"
          />
          <label class="nav__button" for="nav-toggle">
            Menu
          </label>
          <div class="nav__hidden-div">
            <div class="nav__links">
              <a href="!#">HOME</a>
              <a href="!#">CONTACT</a>
              <a href="!#">DESIGN</a>
              <a href="!#">WEBSITES</a>
            </div>
          </div>
        </div>

        <section id="header" class="header">
          <img class="header__logo" src={logo} alt="logo-dark" />
        </section>

        <section class="about">
          <h1>Hi there. I am Himanshu Varshney</h1>
        </section>
      </div>
    );
  }
}

export default App;
