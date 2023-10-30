import React, { useContext } from "react";
import { MyContext } from "../Helper/contextApi";

const PersonalInfo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { setPopUpForm } = useContext(MyContext);
  return (
    <div className="px-5">
      <div className="text-[#ff4d30] mb-3 text-[1.3rem] lg:text-[1.1rem] xl:text-[1rem] md:text-start text-center font-bold">
        Personal Information
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 text-[#777]"
      >
        <div className="flex flex-col md:flex-row gap-3 justify-start">
          <div className="flex flex-col gap-1 justify-start items-start w-full">
            <label htmlFor="" className="text-[13px]">
              First Name *
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              className="bg-[#dbdbdb] text-[#555] text-[12px] px-2 py-2 w-full"
            />
            <p className="text-[8px]">This field is required.</p>
          </div>
          <div className="flex flex-col gap-1 justify-start items-start w-full">
            <label htmlFor="" className="text-[13px]">
              Last Name *
            </label>
            <input
              type="text"
              placeholder="Enter your last name"
              className="bg-[#dbdbdb] text-[#555] text-[12px] px-2 py-2 w-full"
            />
            <p className="text-[8px]">This field is required.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-start">
          <div className="flex flex-col gap-1 justify-start items-start w-full">
            <label htmlFor="" className="text-[13px]">
              Phone Number *
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="bg-[#dbdbdb] text-[#555] text-[12px] px-2 py-2 w-full"
            />
            <p className="text-[8px]">This field is required.</p>
          </div>
          <div className="flex flex-col gap-1 justify-start items-start w-full">
            <label htmlFor="" className="text-[13px]">
              Age *
            </label>
            <input
              type="number"
              placeholder="Enter your Age"
              className="bg-[#dbdbdb] text-[#555] text-[12px] px-2 py-2 w-full"
            />
            <p className="text-[8px]">This field is required.</p>
          </div>
        </div>
        <div className=" flex flex-col gap-1 justify-start items-start w-full">
          <label htmlFor="" className="text-[13px]">
            Email *
          </label>
          <input
            type="text"
            placeholder="Enter your Email Address"
            className="bg-[#dbdbdb] text-[#555] text-[12px] px-2 py-2 w-full"
          />
          <p className="text-[8px]">This field is required.</p>
        </div>
        <div className=" flex flex-col gap-1 justify-start items-start w-full">
          <label htmlFor="" className="text-[13px]">
            Address *
          </label>
          <input
            type="text"
            placeholder="Enter your street Address"
            className="bg-[#dbdbdb] text-[#555] text-[12px] px-2 py-2 w-full"
          />
          <p className="text-[8px]">This field is required.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-start ">
          <div className="flex flex-col gap-1 justify-start items-start w-full">
            <label htmlFor="" className="text-[13px]">
              City *
            </label>
            <input
              type="number"
              placeholder="Enter your City"
              className="bg-[#dbdbdb] text-[#555] text-[12px] px-2 py-2 w-full"
            />
            <p className="text-[8px]">This field is required.</p>
          </div>
          <div className="flex flex-col gap-1 justify-start items-start w-full">
            <label htmlFor="" className="text-[13px]">
              Zip Code *
            </label>
            <input
              type="number"
              placeholder="Enter your Zip code"
              className="bg-[#dbdbdb] text-[#555] text-[12px] px-2 py-2 w-full"
            />
            <p className="text-[8px]">This field is required.</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-1">
          <input type="checkbox" name="updates" />
          <label htmlFor="updates" className="text-[12px]">
            Please send me latest news and updates
          </label>
        </div>
        <div className="flex justify-end items-center">
          <button
            onClick={() => {
              setPopUpForm(false);
            }}
            className="px-3 mb-12 font-bold text-[1.2rem] text-white bg-[#ff4d30] border-[1px] border-yellow-300"
          >
            Reserve Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
