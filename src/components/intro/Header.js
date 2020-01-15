import React, { Component } from "react";
import mountain from "../../assets/mountain2.png";
import logo from "../../assets/signature-black.png";
import img1 from "../../assets/ps.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleMountain: {
        transform: ""
      },
      styleIntroText: {
        transform: ""
      },
      styleClouds: {
        transform: ""
      }
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      var topDistance = window.pageYOffset;
      var translate3dIntro = "translateY(" + -(topDistance * 0.5) + "px)";
      var translate3dMountain = "translateY(" + topDistance * 0.7 + "px)";
      var translateCloud = "translateY(" + topDistance * 1.3 + "px)";
      this.setState(state => {
        return {
          styleMountain: {
            ...state.styleMountain,
            transform: translate3dMountain
          },
          styleIntroText: {
            ...state.styleIntroText,
            transform: translate3dIntro
          },
          styleClouds: {
            ...state.styleClouds,
            transform: translateCloud
          }
        };
      });
    });
  }
  render() {
    return (
      <div id="header" class="header">
        <img class="header__logo" src={logo} alt="logo-dark" />
        <img class="header__mypic" alt="himanshu-varshney" src={img1}></img>

        <div style={this.state.styleIntroText} className="header__intro">
          <h1 className="heading-primary">Hi there! I'm Himanshu Varshney</h1>
          <h2 className="heading-secondary">Web Developer/Designer</h2>
        </div>
        <img
          className="header__mountain2"
          style={this.state.styleMountain}
          src={mountain}
          alt="mountain-back"
        />
      </div>
    );
  }
}

export default Header;
