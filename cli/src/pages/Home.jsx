import React from "react";
import NavBar from "../component/NavBar";
import Header from "../component/Header";
import Body from "../component/Body";
import Projects from "../component/Projects";
import Footer from "../component/Footer";
import Drawer from "../component/Drawer";
import Filter from "../component/Filter";

const Home = () => {
  return (
    <div class="grid items-center grid-cols-12 justify-center">
      {/* <Header />
      <Body />
      <Drawer /> */}
      <div class="col-span-4 p-4  text-white">
        <Filter />
      </div>
      <div class="col-span-8 p-4 text-white">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
