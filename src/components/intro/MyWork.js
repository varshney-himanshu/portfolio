import React, { Component } from "react";
import kyrataxImage from "../../assets/work/kyratax.jpg";
import kyrataxImageMobile from "../../assets/work/kyratax-mobile.jpg";
import kyracrmImage from "../../assets/work/kyratax-crm.jpg";
import msieventsImage from "../../assets/work/msievents.jpg";
import msieventsImageMobile from "../../assets/work/msievents-mobile.jpg";

class MyWork extends Component {
  constructor() {
    super();
    this.state = {
      project1OnScreen: false,
      project2OnScreen: false,
      project3OnScreen: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const distanceFromTop = window.pageYOffset;
      const distProject1 =
        window.pageYOffset +
        document.querySelector("#kyratax").getBoundingClientRect().top -
        500;
      const distProject2 =
        window.pageYOffset +
        document.querySelector("#kyra-crm").getBoundingClientRect().top -
        500;
      const distProject3 =
        window.pageYOffset +
        document.querySelector("#msi-events").getBoundingClientRect().top -
        500;

      if (distProject1 < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ project1OnScreen: true });
        }
      }

      if (distProject2 < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ project2OnScreen: true });
        }
      }

      if (distProject3 < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ project3OnScreen: true });
        }
      }
    });
  }

  render() {
    return (
      <div className="mywork" id="mywork">
        <h1 className="heading-primary">MY WORK</h1>
        <hr className="hr" />

        <div id="kyratax" className="row mywork__project">
          <div
            className={`col col-12 col-md-4 mywork__project__info ${this.state
              .project1OnScreen && "come-from-left"}`}
          >
            <h3 className="heading-tertiary">kyratax.com</h3>
            <p>
              A portfolio website for Kyra Tax Advisors LLP. I created this
              website with React and NodeJS
            </p>
          </div>
          <div className="col col-12 col-md-8 mywork__project__image-container">
            <img
              src={kyrataxImage}
              alt="kyratax.com"
              className={`mywork__project__image-container__img1 ${this.state
                .project1OnScreen && "come-from-right"}`}
            />
            <img
              src={kyrataxImageMobile}
              alt="kratax-mobile"
              className={`mywork__project__image-container__img2 ${this.state
                .project1OnScreen && "come-from-right-delay"}`}
            />
          </div>
        </div>

        <div id="kyra-crm" className="row mywork__project">
          <div
            className={`col col-12 col-md-4 mywork__project__info ${this.state
              .project2OnScreen && "come-from-left"}`}
          >
            <h3 className="heading-tertiary">Employee-Task Management App</h3>
            <p>
              A Full-Stack App I created for Kyra Tax Advisors. Front-end client
              is created with ReactJs and NodeJS and MongoDB for the backend
            </p>
          </div>
          <div className="col col-12 col-md-8 mywork__project__image-container">
            <img
              src={kyracrmImage}
              alt="kyratax.com"
              className={`mywork__project__image-container__img1 ${this.state
                .project2OnScreen && "come-from-right"}`}
            />
          </div>
        </div>

        <div id="msi-events" className="row mywork__project">
          <div
            className={`col col-12 col-md-4 mywork__project__info ${this.state
              .project3OnScreen && "come-from-left"}`}
          >
            <h3 className="heading-tertiary">MSI EVENTS</h3>
            <p>
              MSI Events is the Web Application I developed for Maharaja
              Surajmal Institute. This application was built to provide the user
              ease when it comes to the event management. The users can register
              themselves into any event or even create an event of their own.
            </p>
          </div>
          <div className="col col-12 col-md-8 mywork__project__image-container">
            <img
              src={msieventsImage}
              alt="kyratax.com"
              className={`mywork__project__image-container__img1 ${this.state
                .project3OnScreen && "come-from-right"}`}
            />
            <img
              src={msieventsImageMobile}
              alt="kratax-mobile"
              className={`mywork__project__image-container__img2 ${this.state
                .project3OnScreen && "come-from-right-delay"}`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
