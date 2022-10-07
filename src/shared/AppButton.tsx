import React from 'react'
import { BsApple } from "react-icons/bs";
import bitmap from "../assets/bitmap.svg";

const AppButton = () => {
    
  return (
    <div className="lg:flex gap-6 md:flex sm:gap-2 sm:flex items-center mt-6 sm:mb-6">
      <button className="flex items-center gap-2 border px-7 py-4 rounded-full">
        <i>
          <BsApple className="w-6 h-6 sm:w-4 sm:h-4" />
        </i>
        <p className="font-bold ">App Store</p>
      </button>
      <button className="flex items-center gap-3 border px-7 py-4 rounded-full">
        <img className="w-6 h-6 sm:w-4 sm:h-4" src={bitmap} alt="" />
        <p className="font-bold">Play Store</p>
      </button>
    </div>
  );
}

export default AppButton
