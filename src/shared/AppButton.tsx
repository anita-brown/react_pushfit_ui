import React from 'react'
import { BsApple } from "react-icons/bs";
import bitmap from "../assets/bitmap.svg";

const AppButton = () => {
  return (
    <div className="flex gap-6 items-center mt-6">
      <button className="flex items-center gap-2 border px-7 py-4 rounded-full">
        <i>
          <BsApple className="w-6 h-6" />
        </i>
        <p className="font-bold">App Store</p>
      </button>
      <button className="flex items-center gap-3 border px-7 py-4 rounded-full">
        <img className="w-6 h-6" src={bitmap} alt="" />
        <p className="font-bold">Play Store</p>
      </button>
    </div>
  );
}

export default AppButton
