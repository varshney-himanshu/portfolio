import React, { Component } from "react";
import { Snackbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

import iconMail from "../../assets/social/envelope-square-solid.svg";
import iconGithub from "../../assets/social/github-square-brands.svg";
import iconFacebook from "../../assets/social/facebook-square-brands.svg";
import iconLinkedIn from "../../assets/social/linkedin-brands.svg";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      showSnackBar: false
    };
  }

  onFormSubmit = e => {
    e.preventDefault();
    // console.log(this.state);

    //todo: add mail data logic
    this.setState({ showSnackBar: true });
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCloseSnackBar = () => {
    this.setState({ showSnackBar: false });
  };

  render() {
    const { showSnackBar } = this.state;
    return (
      <div id="contact" className="contact">
        <h1 className="heading-primary">Get In Touch</h1>
        <hr className="hr" />
        <p className="contact__text">
          If you like my work and have some cool project to work on or just want
          to say hi!, send me direct message or contact me through social sites
          listed below
        </p>
        <form className="contact__form" onSubmit={this.onFormSubmit}>
          <input
            name="name"
            onChange={this.onInputChange}
            type="text"
            className="contact__form__input"
            placeholder="Your name here."
            value={this.state.name}
          />
          <input
            name="email"
            onChange={this.onInputChange}
            type="email"
            className="contact__form__input"
            placeholder="Your email here."
            value={this.state.email}
          />
          <textarea
            name="message"
            onChange={this.onInputChange}
            type="text"
            className="contact__form__input contact__form__input--textarea"
            placeholder="A message for me"
            value={this.state.message}
          />
          <button className="contact__form__submit"> Send </button>
        </form>

        <Snackbar
          open={showSnackBar}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          message={
            <span id="message-id">Thankyou! I will contact you shortly!</span>
          }
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          action={[
            <IconButton onClick={this.onCloseSnackBar}>
              <Close />
            </IconButton>
          ]}
        />

        <div className="contact__footer">
          <div>
            <a
              href="mailto:himanshu1998delhi@gmail.com"
              className="contact__footer__links"
              target="__blank"
            >
              <img alt="Mail" src={iconMail}></img>
            </a>
            <a
              href="https://github.com/varshney-himanshu"
              target="__blank"
              className="contact__footer__links"
            >
              <img alt="github" src={iconGithub}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/varshney-himanshu/"
              className="contact__footer__links"
              target="__blank"
            >
              <img alt="linkedin" src={iconLinkedIn}></img>
            </a>
            <a
              href="https://www.facebook.com/thisishimanshuvarshney"
              target="__blank"
              className="contact__footer__links"
            >
              <img alt="facebook" src={iconFacebook}></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
