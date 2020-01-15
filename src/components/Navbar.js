import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navShow: false
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => {
      return { navShow: !state.navShow };
    });
  }

  render() {
    return (
      <div className="Navbar">
        <div
          className={`Navbar__background ${this.state.navShow &&
            "Navbar__background--show"}`}
        ></div>

        <button
          className={`hamburger hamburger--elastic ${this.state.navShow &&
            "is-active"} Navbar__toggler`}
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          onClick={this.handleToggleClick}
        >
          <span class="hamburger-box">
            <span class="hamburger-inner makewhite"></span>
          </span>
        </button>

        <div
          className={`Navbar__links ${this.state.navShow &&
            "Navbar__links--show"}`}
        >
          <ol>
            <li onClick={this.handleToggleClick}>
              <a href="#about">about me</a>
            </li>
            <li onClick={this.handleToggleClick}>
              <a href="#skills">my skills</a>
            </li>
            <li onClick={this.handleToggleClick}>my work</li>
            <li onClick={this.handleToggleClick}>contact</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Navbar;
