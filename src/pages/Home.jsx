import React from "react";
import Button from "../components/ui/Button";
import Hero from "../components/Home/Hero";
import WhoAreWe from "../components/Home/WhoAreWe";
import Mission from "../components/Home/Mission";
import WhyUs from "../components/Home/WhyUs";
import LastEvents from "../components/Home/LastEvents";

const Home = () => {
  return (
    <>
      <Hero/>
      <WhoAreWe/>
      <Mission/>
      <LastEvents/>
    </>
  );
};

export default Home;
