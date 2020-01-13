import "bootstrap/scss/bootstrap-grid.scss";
import "./sass/main.scss";
import React, { Component } from "react";
import logo from "./assets/signature-black.png";
import img1 from "./assets/ps.png";
import mountain1 from "./assets/mountain1.png";
import mountain2 from "./assets/mountain2.png";

class App extends Component {
  componentDidMount() {
    window.addEventListener("scroll", scrollFunc);

    function scrollFunc() {
      // var windowScroll = window.scrollY;
      // console.log(windowScroll);
      var topDistance = window.pageYOffset;

      var layers = document.querySelectorAll("[data-type='parallax']");

      for (var layer of layers) {
        var depth = layer.getAttribute("data-depth");
        var movement = -(topDistance * depth);
        var translate3d = "translate3d(0, " + movement + "px, 0)";
        layer.style["-webkit-transform"] = translate3d;
        layer.style["-moz-transform"] = translate3d;
        layer.style["-ms-transform"] = translate3d;
        layer.style["-o-transform"] = translate3d;
        layer.style.transform = translate3d;
      }
    }

    // var $backBird = document.getElementsByClassName("back-el")[0];

    // $backBird.style.transform = "translateY(" + windowScroll / 4 + "%)";

    //
  }

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
          <img class="header__mypic" alt="himanshu-varshney" src={img1}></img>

          <div data-type="parallax" data-depth="0.5" className="header__intro">
            <h1>Hi there! I'm Himanshu Varshney</h1>
          </div>

          <img
            className="header__mountain2"
            src={mountain2}
            alt="mountain-back"
            data-type="parallax"
            data-depth="0.8"
          />
        </section>
        <div className="row">
          <div
            className="col col-8"
            style={{ color: "white", padding: "5rem" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            vitae, molestiae, ipsam unde maxime quidem error culpa dolorem,
            cupiditate perspiciatis iste autem accusantium amet aperiam
            recusandae! Error ipsa earum quidem! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni culpa laboriosam sed pariatur
            natus suscipit voluptate, modi deleniti repellat iusto ipsum error
            dolorum voluptas deserunt veniam ab inventore porro aliquam.
          </div>
        </div>
      </div>
    );
  }
}

export default App;
