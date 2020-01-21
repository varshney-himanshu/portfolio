import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import MyWork from "./MyWork";
import Contact from "./Contact";

export default function Intro() {
  return (
    <div className="Intro">
      <Header />
      <About />
      <Skills />
      <MyWork />
      <Contact />
    </div>
  );
}
