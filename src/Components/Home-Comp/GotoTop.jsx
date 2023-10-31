import React, { useEffect, useState } from "react";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gotToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHid = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHid) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    console.log(winScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="flex justify-center items-center relative">
          <button
            onClick={gotToBtn}
            className="h-[3rem] w-[3rem] border-[2px] flex justify-center items-center border-white text-[#fff] text-[2rem] bg-[#ff4d30] fixed bottom-[0rem] right-[0rem] md:bottom-[2rem] md:right-[1rem] lg:bottom-[4rem] lg:right-[3rem] xl:bottom-[5rem] xl:right-[5rem] z-50"
          >
            ^
          </button>
        </div>
      )}
    </div>
  );
};

export default GotoTop;
