import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementOnViewport: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const distanceFromTop = window.pageYOffset;
      const heading = document.querySelector(".about__info");
      const elementDistance = heading.offsetTop;
      // console.log(elementDistance, distanceFromTop);
      if (elementDistance < distanceFromTop) {
        if (!this.state.elementOnViewport) {
          this.setState({ elementOnViewport: true });
        }
      }
    });
  }

  render() {
    return (
      <div id="about" className="about">
        <div
          className={`about__info  ${this.state.elementOnViewport &&
            "move-up"}`}
        >
          <h1
            className={`heading-primary ${this.state.elementOnViewport &&
              "flip"}`}
          >
            About Me
          </h1>
          <hr className="hr" />
          <p className={` ${this.state.elementOnViewport && "flip-d-1"}`}>
            I am a full-stack Web Developer and Graphic Designer, currently
            living in New Delhi, India. I have a Bachelor of Computer
            Applications from Maharaja Surajmal Institute. I am self-motivated
            and constantly learning and exploring new technologies and
            techniques. I am very passionate about solving problems, and always
            strive to better my self as a developer.
          </p>
          <br></br>
          <p className={`${this.state.elementOnViewport && "flip-d-15"}`}>
            As a freelancer I'm fully dedicated towards bringing value to my
            clients. My focus is on delivering targeted solutions to lower the
            cost and drive my client's mission success.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
