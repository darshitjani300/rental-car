import React from "react";

const Review = () => {
  return (
    <div className="h-auto p-container">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center text-center md:w-[60%] mx-auto gap-4 ">
          <h3 className="leading-3">Reviewed by people</h3>
          <h1 className="font-bold text-[1.7rem] leading-[25px]">
            Client's Testimonals
          </h1>
          <p className="text-[#706f7b] text-[12px]">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className=" flex flex-col gap-3 md:flex-row md:gap-6 md:justify-center md:items-center">
          <div className="bg-[#fff] shadow-md flex flex-col gap-3 justify-start items-start p-5">
            <h1 className="font-medium">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </h1>
            <div className="flex gap-3">
              <img
                src="/images/p1.jpg"
                className="w-[50px] rounded-[50%]"
                alt=""
              />
              <div className="">
                <h3 className="font-bold">Parry Hotter</h3>
                <h3 className="text-[12px] md:text-[14px] font-medium">
                  Ahmedabad
                </h3>
              </div>

              <div></div>
            </div>
          </div>
          <div className="bg-[#fff] shadow-md flex flex-col gap-3 justify-start items-start p-5">
            <h1 className="font-medium">
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </h1>
            <div className="flex gap-3">
              <img
                src="/images/wonpisli.jpg"
                className="w-[50px] rounded-[50%]"
                alt=""
              />
              <div className="">
                <h3 className="font-bold">Won Rizzly</h3>
                <h3 className="text-[12px] md:text-[14px] font-medium">
                  Vadodara
                </h3>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
