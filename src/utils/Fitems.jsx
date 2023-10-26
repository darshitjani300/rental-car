import React, { useContext } from "react";
import { bookName, pickUp, drop } from "../Helper/constant";
import { AiFillCar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MyContext } from "../Helper/contextApi";

const Fitems = () => {
  const { setFormData, setPopUpForm } = useContext(MyContext);
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
    setPopUpForm(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 px-5 md:grid md:grid-cols-3 text-[14px] md:text-[15px] lg:text-[0.9rem] xl:text-[1rem]"
    >
      <div className="flex flex-col justify-start items-start">
        <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
          <AiFillCar  className="md:text-[1.1rem] xl:text-[1.3rem]" /> Select your car type{" "}
          <span className="text-red-700">*</span>
        </label>
        <select
          name="carName"
          onChange={handleInput}
          className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px] lg:text-[13px] xl:text-[14px] xl:py-3"
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
          <ImLocation className="md:text-[1.1rem] xl:text-[1.3rem]" /> Pick-up{" "}
          <span className="text-red-700">*</span>
        </label>
        <select
          name="pickuploc"
          onChange={handleInput}
          className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px] lg:text-[13px] xl:text-[14px] xl:py-3"
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
          <ImLocation className="md:text-[1.1rem] xl:text-[1.3rem]" /> drop-off{" "}
          <span className="text-red-700">*</span>
        </label>
        <select
          name="dropoffloc"
          onChange={handleInput}
          className="text-[#ababab] border border-gray-40 p-2  w-full text-[12px] lg:text-[13px] xl:text-[14px] xl:py-3"
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
          <AiFillCar className="md:text-[1.1rem] xl:text-[1.3rem]" /> Pick-up{" "}
          <span className="text-red-700">*</span>
        </label>
        <input
          className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px] lg:text-[13px] xl:text-[14px] xl:py-3"
          type="date"
          name="pickdate"
          onChange={handleInput}
        />
      </div>
      <div className="flex flex-col justify-start items-start">
        <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
          <AiFillCar className="md:text-[1.1rem] xl:text-[1.3rem]" /> Drop-off{" "}
          <span className="text-red-700">*</span>
        </label>
        <input
          className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px] lg:text-[13px] xl:text-[14px] xl:py-3"
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
          className="text-white bg-[#ff4d30] p-2 w-full text-[12px] shadow-red-400 shadow-sm border-none cursor-pointer lg:text-[13px] xl:text-[1rem] xl:py-3 tracking-[1px] font-semibold"
          type="submit"
          value="SEARCH"
        />
      </div>
    </form>
  );
};

export default Fitems;
