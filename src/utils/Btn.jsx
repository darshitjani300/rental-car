import React from "react";

const Btn = ({ text, isBlack, icon }) => {
  return (
    <button
      className={
        !isBlack
          ? `bg-[#ff4d30] text-white py-1 px-3 md:py-2 md:px-5 rounded-sm shadow-md flex justify-center items-center gap-2`
          : `bg-[#010103] text-white py-1 px-3 md:py-2 md:px-5 rounded-sm shadow-md flex`
      }
    >
      {text}
      {icon}
    </button>
  );
};
export default Btn;
