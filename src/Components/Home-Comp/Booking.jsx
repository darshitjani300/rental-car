import React from "react";
import { RxCross1 } from "react-icons/rx";
import Fitems from "../../utils/Fitems";

const Booking = () => {
  return (
    <div className="p-container booking-section">
      <div className="my-52">
        <div className="shadow-md bg-white p-3 py-6 rounded-md">
          <h1 className="font-bold mb-5 px-5 md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.5rem]">Book a Car</h1>
          <div className="hidden">
            <div className="bg-red-300 px-1 py-1 flex justify-between items-center">
              <p className="text-red-700 text-[12px] md:text-[14px]">
                Please fill all the fields !!
              </p>
              <RxCross1 color="rgb(185,38,38)" />
            </div>
          </div>
          <Fitems />
        </div>
      </div>
    </div>
  );
};

export default Booking;
