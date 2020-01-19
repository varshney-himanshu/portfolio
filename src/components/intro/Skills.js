import React, { Component } from "react";
import icon1 from "../../assets/logo-ps/responsive.png";
import icon2 from "../../assets/logo-ps/dynamic-logo.png";
import icon3 from "../../assets/logo-ps/fast-logo.png";
import reactIcon from "../../assets/logo/react-original.svg";
import jsIcon from "../../assets/logo/javascript-plain.svg";
import htmlIcon from "../../assets/logo/html5-plain.svg";
import cssIcon from "../../assets/logo/css3-plain.svg";
import bootstrapIcon from "../../assets/logo/bootstrap-plain.svg";
import reduxIcon from "../../assets/logo/redux-original.svg";
import sassIcon from "../../assets/logo/sass-original.svg";
import nodeIcon from "../../assets/logo/nodejs-plain.svg";
import expressIcon from "../../assets/logo/express-original.svg";
import mongoIcon from "../../assets/logo/mongodb-original.svg";
import mysqlIcon from "../../assets/logo/mysql-original.svg";
import socketIcon from "../../assets/logo/socket-io.svg";
import herokuIcon from "../../assets/logo/heroku-plain.svg";
// import zeitIcon from "../../assets/logo/zeit-black-full-logo.svg";

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
        <div className="skills__header">
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

        <div className="row skills__main">
          <div
            className={`col col-12 col-sm-6 skills__main__frontend ${this.state
              .elementOnViewport && "move-up-delay-25"}`}
          >
            <h3 className="heading-tertiary">FRONT-END</h3>
            <div className="row" style={{ margin: "auto" }}>
              <div className="col  col-4 col-lg-3 ">
                <img
                  src={htmlIcon}
                  alt="HTML"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">HTML</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={cssIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech"> CSS</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={sassIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">SASS</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={bootstrapIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">Bootstrap</span>
              </div>
              <div className="col col-4 col-lg-3">
                <img
                  src={jsIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">JavaScript</span>
              </div>

              <div className="col col-4 col-lg-3">
                <img
                  src={reactIcon}
                  alt="React"
                  className="skills__main__icon"
                  title="ReactJS"
                  aria-label="ReactJS"
                ></img>
                <span className="skills__main__tech">ReactJS</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={reduxIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">Redux</span>
              </div>
            </div>
          </div>

          <div
            className={`col col-12 col-sm-6 skills__main__backend ${this.state
              .elementOnViewport && "move-up-delay-30"}`}
          >
            <h3 className="heading-tertiary">BACK-END</h3>
            <div className="row" style={{ margin: "auto" }}>
              <div className="col  col-4 col-lg-3 ">
                <img
                  src={nodeIcon}
                  alt="HTML"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">NodeJS</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={expressIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">ExpressJS</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={mongoIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">MongoDB</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={mysqlIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">MYSQL DB</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={socketIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">Socket.io</span>
              </div>
              <div className="col  col-4 col-lg-3">
                <img
                  src={herokuIcon}
                  alt="React"
                  className="skills__main__icon"
                ></img>
                <span className="skills__main__tech">Heroku</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
