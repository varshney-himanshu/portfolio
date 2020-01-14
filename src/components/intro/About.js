import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleHeading: {
        transform: ""
      },
      styleText1: {
        transform: ""
      },
      styleClouds: {
        transform: ""
      }
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const topDistance = window.pageYOffset;

      var headingpx = topDistance * 0.8 - 280;
      var textpx = topDistance * 0.5 - 280;
      var translateHeading = "translateX(" + headingpx + "px)";
      var translateText = "translateX(" + textpx + "px)";

      if (headingpx < 0) {
        this.setState(state => {
          return {
            styleHeading: {
              ...state.styleHeading,
              transform: translateHeading
            }
          };
        });
      }

      if (textpx < 0) {
        this.setState(state => {
          return {
            styleText1: {
              ...state.styleText,
              transform: translateText
            }
          };
        });
      }
    });
  }

  render() {
    return (
      <div id="about" className="about">
        <h1 className="heading-primary" style={this.state.styleHeading}>
          About Me
        </h1>
        <p style={this.state.styleText1}>
          I am a full-stack Web Developer and Graphic Designer, currently living
          in New Delhi, India. I have a Bachelor of Computer Applications from
          Maharaja Surajmal Insitute. I am self-motivated and constantly
          learning and exploring new technologies and techniques. I am very
          passionate about solving problems, and always strive to better my self
          as a developer.
        </p>
        <br></br>
        <p style={this.state.styleText1}>
          As a freelancer I'm fully dedicated towards bringing value to my
          clients. My focus is on delivering targeted solutions to lower the
          cost and drive my client's mission success.
        </p>
        <p></p>
      </div>
    );
  }
}

export default About;
