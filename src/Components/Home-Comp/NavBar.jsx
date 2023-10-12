import React from "react";
import Btn from "../../utils/Btn";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center pt-3 md:my-5 px-5 p-container">
      <div className="w-20 md:w-24 lg:w-28">
        <a href="">
          <img src="/images/logo.png" alt="logo" />
        </a>
      </div>
      <div>
        <ul className="md:gap-2 lg:gap-4 lg:text-[12px]  hidden text-[9px] md:text-[10px] md:flex font-semibold text-[#010103]">
          <li className="hover:text-[#ff4d30] cursor-pointer duration-200 ease-in">
            Home
          </li>
          <li className="hover:text-[#ff4d30] cursor-pointer duration-200 ease-in">
            About
          </li>
          <li className="hover:text-[#ff4d30] cursor-pointer duration-200 ease-in">
            Vehicle
          </li>
          <li className="hover:text-[#ff4d30] cursor-pointer duration-200 ease-in">
            Testimonials
          </li>
          <li className="hover:text-[#ff4d30] cursor-pointer duration-200 ease-in">
            Our Team
          </li>
          <li className="hover:text-[#ff4d30] cursor-pointer duration-200 ease-in">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex gap-2 justify-end text-[10px] md:text-[10px] lg:text-[12px] font-semibold text-[#010103]">
        <button className="hover:text-[#ff4d30] cursor-pointer duration-200 ease-in">
          Sign In
        </button>
        <Btn text={"Register"} />
      </div>
    </nav>
  );
};

export default NavBar;
