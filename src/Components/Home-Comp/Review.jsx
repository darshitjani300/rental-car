import React from "react";

const Review = () => {
  return (
    <div className="h-auto p-container">
      <div className="flex flex-col gap-16 py-10">
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <h3 className="leading-3 lg:leading-none font-semibold md:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem]">
            Reviewed by people
          </h3>
          <h1 className="font-bold text-[1.7rem] lg:text-[2.2rem] xl:text-[2.6rem] leading-[25px] lg:leading-none">
            Client's Testimonals
          </h1>
          <p className="text-[#706f7b] font-medium w-[60%] text-[12px] md:text-[14px] xl:text-[1rem]">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:flex-row md:gap-6 md:justify-center md:items-center">
          <div className="bg-[#fff] shadow-md flex flex-col gap-3 justify-start items-start lg:px-12 p-5">
            <h1 className="font-medium lg:w-[80%] lg:text-[1.1rem] xl:text-[1.3rem]">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </h1>
            <div className="flex gap-3 lg:pt-5">
              <img
                src="/images/p1.jpg"
                className="w-[50px] lg:w-[60px] rounded-[50%]"
                alt=""
              />
              <div className="">
                <h3 className="font-bold lg:text-[1.2rem]">Parry Hotter</h3>
                <h3 className="text-[12px] md:text-[14px] lg:text-[1rem] font-medium">
                  Ahmedabad
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-[#fff] shadow-md flex flex-col gap-3 justify-start items-start lg:px-12 p-5">
            <h1 className="font-medium lg:w-[80%] lg:text-[1.1rem] xl:text-[1.3rem]">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </h1>
            <div className="flex gap-3 lg:pt-5">
              <img
                src="/images/wonpisli.jpg"
                className="w-[50px] lg:w-[60px] rounded-[50%]"
                alt=""
              />
              <div className="">
                <h3 className="font-bold lg:text-[1.2rem]">Won Rizzly</h3>
                <h3 className="text-[12px] md:text-[14px] lg:text-[1rem] font-medium">
                  Vadodara
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
