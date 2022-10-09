import React from 'react'
import { BsApple } from "react-icons/bs";
import bitmap from "../assets/bitmap.svg";

const AppButton = () => {
    
  return (
    <div className="flex gap-4 md:flex items-center mt-6 sm:mb-6">
      <button className="flex items-center gap-1 border px-7 py-4 rounded-full">
        <i>
          <BsApple className="lg:w-6 lg:h-6 w-4 h-4" />
        </i>
        <p className="font-bold lg:text-[16px] text-[14px]">App Store</p>
      </button>
      <button className="flex items-center gap-1 border px-7 py-4 rounded-full">
        <img className="lg:w-6 lg:h-6 w-4 h-4" src={bitmap} alt="" />
        <p className="font-bold lg:text-[16px] text-[14px]">Play Store</p>
      </button>
    </div>
  );
}

export default AppButton
