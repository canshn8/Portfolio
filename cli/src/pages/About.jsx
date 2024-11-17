import React from "react";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import CurriculumVitae from "../component/CurriculumVitae";
import Body from "../component/Body";
import Projects from "../component/Projects";
import Footer from "../component/Footer";
import Drawer from "../component/Drawer";

function About() {
  return (
    <div>
      <Header />
      <Body />
      <Projects />
      <Drawer />
    </div>
  );
}

export default About;
