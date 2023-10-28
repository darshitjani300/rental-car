import React, { useState } from "react";
import { car } from "../Helper/constant";

const VehicleModel = () => {
  const [foundCar, setFoundCar] = useState(car[0]);

  const updateInfo = (id) => {
    let findBtn = car.find((x) => x.id === id);
    console.log(findBtn);
    return setFoundCar(findBtn);
  };

  return (
    <div className="p-container 2xl:w-[70%] flex flex-col h-full gap-10 py-10 ">
      <div className="text-center flex flex-col gap-3 md:gap-0 md:w-[50%] my-0 mx-auto">
        <h3 className="font-semibold text-[1.5rem] leading-5 md:text-[1.2rem] lg:text-[1.3rem] xl:text-[1.5rem] ">
          Vehicle Models
        </h3>
        <h1 className="font-extrabold py-3 text-[2.5rem] tracking-wide leading-[50px] md:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.7rem]">
          Our rental fleet
        </h1>
        <p className="text-[#706f7b] text-[14px] md:text-[15px] lg:text-[1rem] xl:text-[1.1rem]">
          Choose from a verity of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex flex-col md:flex md:flex-row bg-white shadow-sm">
        <div className="carNames flex flex-col gap-2">
          {car.map((x) => {
            return (
              <button
                className={`bg-[#e9e9e9] text-left p-3 xl:py-4 xl:px-5 text-[13px] md:text-[15px] lg:text-[1rem] xl:text-[1.2rem] font-semibold hover:bg-red-500 hover:text-[#fff] ${
                  foundCar.id === x.id && "bg-red-500 text-[#fff]"
                }`}
                key={x.id}
                onClick={() => updateInfo(x.id)}
              >
                {x.name}
              </button>
            );
          })}
        </div>
        <div className="carImages mx-auto my-auto">
          <img src={foundCar.img} alt="audi" />
        </div>
        <div className="carInfo flex flex-col justify-between">
          <div>
            <div className="bg-[#ff4d30] text-white px-3 py-1 text-center">
              <span className="font-bold text-[1.1rem] md:text-[1.2rem] lg:text-[1.4rem] align-middle xl:text-[1.6rem]">
                ${foundCar.info.rpd}
              </span>
              <span className="text-[14px] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                {" "}
                / rent per day
              </span>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] border-[1px] border-black px-2 py-[6px] lg:py-2 xl:py-3">
              <h1 className="justify-self-center">Model</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.model}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] border-[1px] border-black px-2 py-[6px] lg:py-2 xl:py-3">
              <h1 className="justify-self-center">Mark</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.mark}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] border-[1px] border-black px-2 py-[6px] lg:py-2 xl:py-3">
              <h1 className="justify-self-center">Year</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.year}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] border-[1px] border-black px-2 py-[6px] lg:py-2 xl:py-3">
              <h1 className="justify-self-center">Doors</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.door}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] border-[1px] border-black px-2 py-[6px] lg:py-2 xl:py-3">
              <h1 className="justify-self-center">AC</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.ac}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] border-[1px] border-black px-2 py-[6px] lg:py-2 xl:py-3">
              <h1 className="justify-self-center">Transmission</h1>
              <h1 className="justify-self-center  font-medium">
                {foundCar.info.transmission}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] md:text-[12px] lg:text-[13px] xl:text-[14px] border-[1px] border-black px-2 py-[6px] lg:py-2 xl:py-3">
              <h1 className="justify-self-center">Fuel</h1>
              <h1 className="justify-self-center  font-medium">
                {foundCar.info.fuel}
              </h1>
            </div>
          </div>
          <div className="bg-[#ff4d30] cursor-pointer text-white text-center p-1 lg:py-2 mt-2 font-medium shadow-lg md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem]">
            RESERVE
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModel;
