import React, { useContext, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MyContext } from "../../Helper/contextApi";
import { bookName, pickUp, drop } from "../../Helper/constant";
import { AiFillCar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Booking = () => {
  const { formData, setFormData, setPopUpForm } = useContext(MyContext);
  const [isError, setIsError] = useState(false);

  const handleInput = (e) => {
    e.preventDefault;
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validateForm = () => {
    if (formData.carName == " ") {
      console.warn("carName is empty");
      setIsError(true);
      setPopUpForm(false);
    } else if (formData.pickuploc == " ") {
      console.warn("Pickup is empty");
      setPopUpForm(false);
    } else if (formData.dropoffloc == " ") {
      console.warn("dropoffloc is empty");
      setPopUpForm(false);
    } else if (formData.pickdate == " ") {
      console.warn("pickdate is empty");
      setPopUpForm(false);
    } else if (formData.dropdate == " ") {
      console.warn("dropdate is empty");
      setPopUpForm(false);
    } else {
      setIsError(false);
      setPopUpForm(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };

  return (
    <div className="p-container 2xl:w-[70%] booking-section">
      <div className="my-52">
        <div className="shadow-md bg-white p-3 py-6 rounded-md">
          <h1 className="font-bold mb-5 px-5 md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.5rem]">
            Book a Car
          </h1>
          {isError && (
            <div className="block my-3">
              <div className="bg-[#F8D7DA] p-2 rounded-xl flex justify-between items-center">
                <p className="text-[#721C24] font-medium text-[1rem] ">
                  All fields required!
                </p>
                <RxCross1 color="text-[#721C24]" />
              </div>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 px-5 md:grid md:grid-cols-3 text-[14px] md:text-[15px] lg:text-[0.9rem] xl:text-[1rem]"
          >
            <div className="flex flex-col justify-start items-start">
              <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
                <AiFillCar className="md:text-[1.1rem] xl:text-[1.3rem]" />{" "}
                Select your car type <span className="text-red-700">*</span>
              </label>
              <select
                name="carName"
                onChange={handleInput}
                className="text-[#ababab] border border-gray-40 p-2 w-full text-[12px] lg:text-[13px] xl:text-[14px] xl:py-3"
              >
                {bookName.map((x) => {
                  return (
                    <option value={x.value && x.value} key={x.id}>
                      {x.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col justify-start items-start">
              <label className="font-semibold flex justify-center items-center gap-2 p-1 pb-3">
                <ImLocation className="md:text-[1.1rem] xl:text-[1.3rem]" />{" "}
                Pick-up <span className="text-red-700">*</span>
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
                <ImLocation className="md:text-[1.1rem] xl:text-[1.3rem]" />{" "}
                drop-off <span className="text-red-700">*</span>
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
                <AiFillCar className="md:text-[1.1rem] xl:text-[1.3rem]" />{" "}
                Pick-up <span className="text-red-700">*</span>
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
                <AiFillCar className="md:text-[1.1rem] xl:text-[1.3rem]" />{" "}
                Drop-off <span className="text-red-700">*</span>
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
        </div>
      </div>
    </div>
  );
};

export default Booking;
