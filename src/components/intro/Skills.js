import React, { Component } from "react";
import icon1 from "../../assets/logo-ps/responsive.png";
import icon2 from "../../assets/logo-ps/dynamic-logo.png";
import icon3 from "../../assets/logo-ps/fast-logo.png";
export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementOnViewport: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const distanceFromTop = window.pageYOffset;
      const heading = document.querySelector(".skills");
      const elementDistance = heading.offsetTop - 500;
      console.log(elementDistance, distanceFromTop);
      if (elementDistance < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ elementOnViewport: true });
        }
      }
    });
  }

  render() {
    return (
      <div id="skills" className="skills">
        <h1 className="heading-primary">My Skills</h1>

        <div className="row skills__cards">
          <div className="col col-12 col-lg-4 skills__cards__card">
            <img
              src={icon2}
              alt=""
              className={`skills__cards__card__icon ${this.state
                .elementOnViewport && "drop-delay-10"}`}
            />

            <div
              className={`card__body ${this.state.elementOnViewport &&
                "move-up-delay"}`}
            >
              <div className="skills__cards__card__heading">Dynamic</div>
              <div className="skills__cards__card__text">
                Websites don't have to be static, I love making pages come to
                life.
              </div>
            </div>
          </div>

          <div className="col col-12 col-lg-4 skills__cards__card">
            <img
              src={icon3}
              alt=""
              className={`skills__cards__card__icon  ${this.state
                .elementOnViewport && "drop-delay-5"}`}
            />

            <div
              className={`card__body ${this.state.elementOnViewport &&
                "move-up-delay"}`}
            >
              <div className="skills__cards__card__heading">Fast</div>
              <div className="skills__cards__card__text">
                One of my priorities is to write efficient code so all my
                projects have fast load time and lag free
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-4 skills__cards__card">
            <img
              src={icon1}
              alt=""
              className={`skills__cards__card__icon ${this.state
                .elementOnViewport && "drop"}`}
            />

            <div
              className={`card__body ${this.state.elementOnViewport &&
                "move-up-delay"}`}
            >
              <div className="skills__cards__card__heading">Responsive</div>
              <div className="skills__cards__card__text">
                My designs are responsive and compatible on every viewport and
                devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
