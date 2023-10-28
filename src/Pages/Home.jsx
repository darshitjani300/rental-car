import React, { useContext } from "react";
import NavBar from "../Components/Home-Comp/NavBar";
import Hero from "../Components/Home-Comp/Hero";
import Booking from "../Components/Home-Comp/Booking";
import Banner from "../Components/Home-Comp/Banner";
import VehicleModel from "./VehicleModel";
import Review from "../Components/Home-Comp/Review";
import PopUpForm from "../utils/PopUpForm";
import { MyContext } from "../Helper/contextApi";
import Info from "../Components/Home-Comp/Info";
import Footer from "../Components/Home-Comp/Footer";

const Home = () => {
  const { popUpForm, setPopUpForm } = useContext(MyContext);
  return (
    <>
      {/* <NavBar /> */}
      <Hero />
      <Booking />
      {popUpForm && (
        <div
          onClick={() => setPopUpForm(!popUpForm)}
          className="fixed top-0 left-0 bg-[rgba(0,0,0,0.6)] h-screen w-screen "
        ></div>
      )}
      {popUpForm && <PopUpForm popUpForm={popUpForm} />}
      <Info />
      <VehicleModel />
      <Banner />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
