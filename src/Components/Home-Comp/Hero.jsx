import React from "react";
import Btn from "../../utils/Btn";
import NavBar from "./NavBar";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Hero = () => {
  const isBlack = true;
  return (
    <>
      <div className="hero h-full">
        <NavBar />
        <div className="p-container 2xl:w-[70%] flex relative pt-16 md:pt-24 text-center md:text-start">
          <div className="flex flex-col justify-center gap-4">
            <h3 className="font-bold text-[14px] md:text-[1rem] lg:text-[18px] xl:text-[1.5rem] lg:leading-none leading-3">
              Plan your trip now
            </h3>
            <h1 className="font-bold text-[1.2rem] md:text-[2.5rem] lg:text-[3rem] lg:leading-[50px] xl:text-[3.3rem] xl:leading-[55px] leading-[45px]">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </h1>
            <p className="text-[#706f7b] md:text-[14px] lg:text-[1rem] xl:text-[1.1rem]">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex justify-center text-[14px] md:text-[1rem] md:justify-start items-center gap-4">
              <Btn text={`Book Ride`} icon={<AiOutlineCheckCircle />} />
              <Btn text={"Learn More >"} isBlack={isBlack} />
            </div>
          </div>
          <div className=" hidden md:block">
            <img src="/images/hero.png" alt="Car" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
