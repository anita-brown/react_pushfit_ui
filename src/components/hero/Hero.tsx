import React from "react";
import star from "../../assets/star.svg";
import mock from "../../assets/mock.svg";
import bitmap from "../../assets/bitmap.svg"
import { BsApple } from "react-icons/bs";
// import { HiOutlineArrowLongDown } from "react-icons/hi";
import { CgArrowLongDown } from "react-icons/cg";


const Hero = () => {
  return (
    <section className="flex w-[100%] p-16">
      <div className="flex flex-col gap-6 w-[60%] mt-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-8 items-start">
            <img className="w-24" src={star} alt="" />
            <span className="text-6xl font-bold"> Make walking </span>
          </div>
          <p className="text-6xl font-bold">your daily habit that</p>
          <p className="text-6xl font-bold">rewards.</p>
        </div>
        <p className="leading-7 font-light w-[55%] text-left border-l border-gray-800 px-6 ">Sed ut perspiciatis unde omnis iste natus error sit — voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.</p>
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
        <div className="flex mt-12">
          <i>
            <CgArrowLongDown size={32} />
          </i>
          <p className="text-xs">
            EXPLORE <br /> MORE
          </p>
        </div>
      </div>
      <div className="w-[40%]">
        <img className="h-55 w-55" src={mock} alt="" />
      </div>
    </section>
  );
};

export default Hero;
