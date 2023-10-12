import React, { useState } from "react";
import { bookName, pickUp, drop } from "../Helper/constant";
import { AiFillCar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Fitems = () => {
  const [formData, setFormData] = useState({
    carName: " ",
    pickuploc: " ",
    dropoffloc: " ",
    pickdate: " ",
    dropdate: " ",
  });
  const handleInput = (e) => {
    e.preventDefault;
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3  md:grid md:grid-cols-3 text-[14px] md:text-[14px]"
    >
      <div className="flex flex-col justify-start items-start">
        <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
          <AiFillCar size={18} /> Select your car type{" "}
          <span className="text-red-700">*</span>
        </label>
        <select
          name="carName"
          onChange={handleInput}
          className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px]"
        >
          {bookName.map((x) => {
            return (
              <option value={x.name} key={x.id}>
                {x.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col justify-start items-start">
        <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
          <ImLocation size={18} /> Pick-up{" "}
          <span className="text-red-700">*</span>
        </label>
        <select
          name="pickuploc"
          onChange={handleInput}
          className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px]"
        >
          {pickUp.map((x) => {
            return (
              <option value={x.name} key={x.id}>
                {x.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col justify-start items-start">
        <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
          <ImLocation size={18} /> drop-off{" "}
          <span className="text-red-700">*</span>
        </label>
        <select
          name="dropoffloc"
          onChange={handleInput}
          className="text-[#ababab] border border-gray-40 p-2  w-full text-[12px]"
        >
          {drop.map((x) => {
            return (
              <option value={x.name} key={x.id}>
                {x.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col justify-start items-start">
        <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
          <AiFillCar size={18} /> Pick-up{" "}
          <span className="text-red-700">*</span>
        </label>
        <input
          className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px]"
          type="date"
          name="pickdate"
          onChange={handleInput}
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
          <AiFillCar size={18} /> Drop-off{" "}
          <span className="text-red-700">*</span>
        </label>
        <input
          className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px]"
          type="date"
          name="dropdate"
          onChange={handleInput}
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3 invisible">
          <AiFillCar size={18} /> Drop-off{" "}
          <span className="text-red-700">*</span>
        </label>
        <input
          className="text-white bg-[#ff4d30] p-2 w-full text-[12px] shadow-red-400 shadow-sm border-none cursor-pointer"
          type="submit"
        />
      </div>
    </form>
  );
};

export default Fitems;
