import React, { useContext } from "react";
import { AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { MyContext } from "../Helper/contextApi";
import PersonalInfo from "./PersonalInfo";

const PopUpForm = () => {
  const { formData, setPopUpForm, popUpForm } = useContext(MyContext);
  console.log(popUpForm);
  console.log(formData);

  return (
    // <div className="fixed left-0 z-50 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.6)">
    <div className="flex fixed left-[50%] translate-x-[-50%] z-50  top-0 flex-col w-full h-full md:w-[50%] mx-auto bg-white my-10 overflow-auto">
      <div>
        <div className="flex items-center justify-between px-5 bg-[#ff4d30] py-1">
          <h1 className="font-bold text-white tracking-wide text-[1.2rem]">
            COMPLETE RESERVATION
          </h1>
          <AiOutlineClose
            className="text-white cursor-pointer"
            size={18}
            onClick={() => setPopUpForm(!popUpForm)}
          />
        </div>
        <div className="flex flex-col gap-3 bg-red-100 p-5">
          <div className="flex gap-3 items-center">
            <AiFillInfoCircle color="#ff4d30" size={18} />
            <h2 className="text-[#ff4d30] font-semibold">
              Upon completing this reservation inquiry you will receive:
            </h2>
          </div>
          <p className="text-[#777] text-[13px] font-medium p-1">
            Your rental car voucher to produce on arrival at the rental desk and
            a toll-free customer support number.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center  md:grid md:grid-cols-2 ">
          <div className="md:justify-self-start p-4">
            <h1 className="text-[#ff4d30] font-bold text-[14px] py-3">
              Location & Date
            </h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                  <ImLocation />
                  <h1 className="font-bold text-[13px]">
                    Pick-up Date and Time
                  </h1>
                </div>
                <div className="flex gap-1 text-[13px] text-[#777] px-3">
                  <h1>{formData.pickdate}</h1>
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
                  <h1>{formData.dropdate}</h1>
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
                  <h1 className="text-[13px] text-[#777] px-3">
                    {formData.pickuploc}
                  </h1>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <ImLocation />
                  <h1 className="font-bold text-[13px]">Drop-off Location</h1>
                </div>
                <div className="flex gap-1 text-[13px] text-[#777] px-3">
                  <h1 className="text-[13px] text-[#777] px-3">
                    {formData.dropoffloc}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="md:justify-self-start p-4">
            <div className="flex items-center justify-center gap-2 py-3">
              <h1 className="font-semibold text-[14px]">Car</h1>
              <span>-</span>
              <h1 className="text-[#ff4d30] font-bold text-[14px]">
                {formData.carName}
              </h1>
            </div>
            <img src="/images/bmw.jpg" className="w-[90%] mt-5" alt="" />
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-black mx-2 mb-4"></div>
      <PersonalInfo />
    </div>
    // </div>
  );
};

export default PopUpForm;
