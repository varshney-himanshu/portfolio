import React, { Component } from "react";
import kyrataxImage from "../../assets/work/kyratax.jpg";
import kyrataxImageMobile from "../../assets/work/kyratax-mobile.jpg";
import kyracrmImage from "../../assets/work/kyratax-crm.jpg";

class MyWork extends Component {
  render() {
    return (
      <div className="mywork" id="mywork">
        <h1 className="heading-primary">MY WORK</h1>
        <div className="row mywork__project">
          <div className="col col-12 col-md-4 mywork__project__info">
            <h3 className="heading-tertiary">kyratax.com</h3>
            <p> A portfolio website for Kyra Tax Advisors LLP. </p>
          </div>
          <div className="col col-12 col-md-8 mywork__project__image-container">
            <img
              src={kyrataxImage}
              alt="kyratax.com"
              className="mywork__project__image-container__img1"
            />
            <img
              src={kyrataxImageMobile}
              alt="kratax-mobile"
              className="mywork__project__image-container__img2"
            />
          </div>
        </div>

        <div className="row mywork__project">
          <div className="col col-12 col-md-4 mywork__project__info">
            <h3 className="heading-tertiary">Employee-Task Management App</h3>
          </div>
          <div className="col col-12 col-md-8 mywork__project__image-container">
            <img
              src={kyracrmImage}
              alt="kyratax.com"
              className="mywork__project__image-container__img1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MyWork;
