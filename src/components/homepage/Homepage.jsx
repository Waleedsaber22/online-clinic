import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Services from "./Services";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Services />
      <Footer />
    </>
  );
};

export default Homepage;
