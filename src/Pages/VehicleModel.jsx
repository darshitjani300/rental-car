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
    <div className="p-container flex flex-col h-full gap-10 py-10 ">
      <div className="text-center flex flex-col gap-3 md:gap-0 md:w-[50%] my-0 mx-auto">
        <h3 className="font-semibold text-[1.5rem] leading-5 md:text-[1rem] ">
          Vehicle Models
        </h3>
        <h1 className="font-extrabold text-[2.5rem] tracking-wide leading-[50px] md:text-[1.7rem]">
          Our rental fleet
        </h1>
        <p className="text-[#706f7b] text-[14px] md:text-[13px] ">
          Choose from a verity of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex md:flex-row bg-white shadow-sm md:gap-16">
        <div className="carNames flex flex-col gap-1">
          {car.map((x) => {
            return (
              <button
                className={`bg-[#e9e9e9] text-left p-3 text-[13px] font-semibold hover:bg-red-500 hover:text-[#fff] ${
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
        <div className="carImages md:w-[40%] my-0 mx-auto">
          <img src={foundCar.img} alt="audi" />
        </div>
        <div className="carInfo">
          <div className="bg-[#ff4d30] text-white px-3 py-1 text-center">
            <span className="font-bold text-[1.1rem]">
              ${foundCar.info.rpd}
            </span>
            <span className="text-[14px]">/ per day rent</span>
          </div>
          <div>
            <div className="grid grid-cols-2 items-center text-[10px] border-[1px] border-black px-2 py-[6px]">
              <h1 className="justify-self-center">Model</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.model}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] border-[1px] border-black px-2 py-[6px]">
              <h1 className="justify-self-center">Mark</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.mark}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] border-[1px] border-black px-2 py-[6px]">
              <h1 className="justify-self-center">Year</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.year}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center border-[1px] text-[10px] border-black px-2 py-[6px]">
              <h1 className="justify-self-center">Doors</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.door}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] border-[1px] border-black px-2 py-[6px]">
              <h1 className="justify-self-center">AC</h1>
              <h1 className="justify-self-center font-medium">
                {foundCar.info.ac}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] border-[1px] border-black px-2 py-[6px]">
              <h1 className="justify-self-center">Transmission</h1>
              <h1 className="justify-self-center  font-medium">
                {foundCar.info.transmission}
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center text-[10px] border-[1px] border-black px-2 py-[6px]">
              <h1 className="justify-self-center">Fuel</h1>
              <h1 className="justify-self-center  font-medium">
                {foundCar.info.fuel}
              </h1>
            </div>
            <div className="bg-[#ff4d30] cursor-pointer text-white text-center p-1 mt-2 font-medium shadow-lg">
              RESERVE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleModel;
