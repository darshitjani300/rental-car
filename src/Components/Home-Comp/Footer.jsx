import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="p-container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:text-start md:gap-10 xl:grid-cols-4 text-center gap-5 py-10">
          <ul className="flex flex-col md:items-start items-center gap-2 py-5">
            <li className="font-bold text-[1.5rem]">
              CAR <span className="font-medium">Rental</span>{" "}
            </li>
            <li className="text-[#706f7b]">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </li>
            <li className="mt-4">
              <a
                href="tel:12345698"
                className="flex items-center font-bold gap-1"
              >
                <FiPhoneCall className="text-[1.3rem]" />
                &nbsp; (123) -456-789
              </a>
            </li>
            <li>
              <a
                href="mailto:carrental@gmail.com"
                className="flex items-center font-bold gap-1"
              >
                <AiOutlineMail className="text-[1.3rem]" />
                &nbsp; carrental@gmail.com
              </a>
            </li>
            <li className="text-[0.9rem] mb-5">Design by XpeedStudio</li>
          </ul>
          <ul className="flex flex-col items-center md:items-start gap-2 py-5">
            <li className="text-[1.5rem] font-bold">COMPANY</li>
            <li className="mt-1">New York</li>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work</li>
          </ul>
          <ul className="flex flex-col items-center md:items-start gap-2 py-5">
            <li className="text-[1.5rem] font-bold">WORKING HOURS</li>
            <li className="mt-2">Mon - Fri: 9:00AM - 9:00PM</li>
            <li>Sat: 9:00AM - 19:00PM</li>
            <li>Sun: Closed</li>
          </ul>
          <ul className="flex flex-col items-center md:items-start gap-2 py-5">
            <li className="text-[1.5rem] font-bold">SUBSCRIPTION</li>
            <li className="mt-2">
              Subscribe your Email address for latest news & updates.
            </li>
            <li className="w-full">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full p-4 bg-[#ececec]"
              />
            </li>
            <li className="w-full">
              <button className=" w-full p-3 font-semibold tracking-wide bg-[#ff4d30] text-white text-[1.3rem] ">
                SUBMIT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
