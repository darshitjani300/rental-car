import React from "react";

const Btn = ({ text, isBlack, icon }) => {
  return (
    <button
      className={
        !isBlack
          ? `bg-[#ff4d30] text-white py-1 px-3 md:py-2 md:px-5 lg:py-3 xl:py-4 rounded-sm shadow-md flex justify-center items-center gap-2 border-[1px] border-transparent`
          : `bg-[#010103] text-white hover:bg-white hover:text-[#010103] hover:border-[2px] border-[2px] hover:border-[#010103] lg:py-3 xl:py-4 border-[#010103] transition-all duration-200 ease py-1 px-3 md:py-2 md:px-5 rounded-sm shadow-md flex`
      }
    >
      {text}
      {icon}
    </button>
  );
};
export default Btn;
