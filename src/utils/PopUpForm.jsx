import React from "react";
import { GrClose } from "react-icons/gr";
import { AiFillInfoCircle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const PopUpForm = () => {
  return (
    <div className="flex flex-col w-full h-full md:w-[60%] mx-auto  my-10">
      <div className="flex items-center justify-between px-5 bg-[#ff4d30] py-1">
        <h1 className="font-bold text-white tracking-wide text-[1.2rem]">
          COMPLETE RESERVATION
        </h1>
        <GrClose />
      </div>
      <div className="flex flex-col gap-3 bg-red-100 p-5">
        <div className="flex gap-3 items-center">
          <AiFillInfoCircle color="#ff4d30" size={18} />
          <h2 className="text-[#ff4d30] font-semibold">
            Upon completing this reservation inquiry you will receive:
          </h2>
        </div>
        <p className="text-[#777] text-[13px] font-medium p-1">
          Your rental car voucher to produce on arrival at the rental desk and a
          toll-free customer support number.
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="justify-self-start p-4">
          <h1 className="text-[#ff4d30] font-bold text-[14px] py-3">
            Location & Date
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <ImLocation />
                <h1 className="font-bold text-[13px]">Pick-up Date and Time</h1>
              </div>
              <div className="flex gap-1 text-[13px] text-[#777] px-3">
                <h1>22-06-2003</h1>
                <h1>/</h1>
                <input
                  type="time"
                  className="text-[10px] border-[1px] border-black rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 items-center">
                <ImLocation />
                <h1 className="font-bold text-[13px]">
                  Drop-off Date and Time
                </h1>
              </div>
              <div className="flex gap-1 text-[13px] text-[#777] px-3">
                <h1>22-06-2003</h1>
                <h1>/</h1>
                <input
                  type="time"
                  className="text-[10px] border-[1px] border-black rounded-sm"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ImLocation />
                <h1 className="font-bold text-[13px]">Pick-up Location</h1>
              </div>
              <div className="flex gap-1 text-[13px] text-[#777] px-3">
                <h1 className="text-[13px] text-[#777] px-3">Ahmedabad</h1>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <ImLocation />
                <h1 className="font-bold text-[13px]">Drop-off Location</h1>
              </div>
              <div className="flex gap-1 text-[13px] text-[#777] px-3">
                <h1 className="text-[13px] text-[#777] px-3">Nova sad</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-self-start p-4">
          <div className="flex items-center gap-2 py-3">
            <h1 className="font-semibold text-[14px]">Car</h1>
            <span>-</span>
            <h1 className="text-[#ff4d30] font-bold text-[14px]">Car</h1>
          </div>
          <img src="/images/bmw.jpg" className="w-[90%] mt-5" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopUpForm;
