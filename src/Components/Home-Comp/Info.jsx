import React from "react";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-container gap-3 h-[100vh] w-full">
      <h2 className="font-semibold">Plan your trip now</h2>
      <h1 className="font-bold text-[1.8rem]">Quick & esay car rental</h1>
      <div className="flex gap-5">
        <div className="flex flex-col justify-center gap-1 items-center">
          <img src="/banner/1.png" alt="" className="w-[150px] h-auto" />
          <h1 className="font-bold">Select Car</h1>
          <p className="text-[12px] text-[#706f7b] w-[80%] font-medium">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src="/banner/2.png" alt="" className="w-[150px] h-auto" />
          <h1 className="font-bold">Contact Operator</h1>
          <p className="text-[12px] text-[#706f7b] font-medium w-[80%]">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src="/banner/3.png" alt="" className="w-[150px] h-auto" />
          <h1 className="font-bold">Let's Drive</h1>
          <p className="text-[12px] text-[#706f7b] w-[80%] font-medium">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
