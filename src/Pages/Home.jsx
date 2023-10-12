import React from "react";
import NavBar from "../Components/Home-Comp/NavBar";
import Hero from "../Components/Home-Comp/Hero";
import Booking from "../Components/Home-Comp/Booking";
import Banner from "../Components/Home-Comp/Banner";
import VehicleModel from "./VehicleModel";
import Review from "../Components/Home-Comp/Review";
import PopUpForm from "../utils/PopUpForm";

const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <Booking />
      <VehicleModel />
      <Banner />
      <Review />
      <PopUpForm />
    </>
  );
};

export default Home;
