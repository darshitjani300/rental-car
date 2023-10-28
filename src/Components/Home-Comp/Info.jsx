import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-48 text-center p-container 2xl:w-[70%] gap-3 w-full">
      <h2 className="font-semibold md:text-[17px] lg:text-[18px] xl:text-[1.5rem] leading-none">
        Plan your trip now
      </h2>
      <h1 className="font-bold text-[1.8rem] md:text-[1.9rem] lg:text-[2rem] leading-none xl:text-[2.5rem] tracking-wide">
        Quick & esay car rental
      </h1>
      <div className="flex flex-col md:flex-row gap-5 pt-5 md:pt-10 xl:pt-16">
        <div className="flex flex-col justify-center gap-2 items-center">
          <img src="/banner/1.png" alt="" className="w-[150px] h-auto" />
          <h1 className="font-bold text-[1.3rem] lg:text-[1.3rem] xl:text-[1.5rem]">
            Select Car
          </h1>
          <p className="text-[14px] lg:text-[15px] xl:text-[1rem] text-[#706f7b] w-[80%] md:w-[70%] lg:w-[60%] font-medium">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="/banner/2.png" alt="" className="w-[150px] h-auto" />
          <h1 className="font-bold text-[1.3rem] lg:text-[1.3rem] xl:text-[1.5rem]">
            Contact Operator
          </h1>
          <p className="text-[14px] lg:text-[15px] xl:text-[1rem] text-[#706f7b] font-medium w-[80%] md:w-[70%] lg:w-[60%]">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img src="/banner/3.png" alt="" className="w-[150px] h-auto" />
          <h1 className="font-bold text-[1.3rem] lg:text-[1.3rem] xl:text-[1.5rem]">
            Let's Drive
          </h1>
          <p className="text-[14px] lg:text-[15px] xl:text-[1rem] text-[#706f7b] font-medium w-[80%] md:w-[70%] lg:w-[60%]">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
