import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#2d2d2d] h-[40vh] md:h-[25vh] my-24">
      <div className="p-container 2xl:w-[70%] h-full text-white text-center flex flex-col gap-3 justify-center items-center">
        <h1 className="font-semibold md:text-[2rem] text-[2rem] leading-[35px]">
          Save Big with our cheap car rental!
        </h1>
        <h1 className=" md:text-[1.1rem]">
          Top Airports. Local Suppliers. <span className="text-[#ff4d30]">24/7</span> Support.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
