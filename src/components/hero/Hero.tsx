import React from "react";
import star from "../../assets/star.svg";
import mock from "../../assets/mock.svg";
import { CgArrowLongDown } from "react-icons/cg";
import AppButton from "../../shared/AppButton";

const Hero = () => {
  return (
    <section className="flex md:flex-col md:items-center sm:flex-col sm:items-center sm:w-full w-full pt-16">
      <div className="flex flex-col gap-6 w-[60%] sm:w-[100%] md:mt-5 lg:mt-10">
        <div className="flex flex-col lg:gap-4 md:gap-2">
          <div className="flex gap-8 items-start">
            <img className="w-24" src={star} alt="" />
            <span className="lg:text-6xl md:text-4xl sm:text-2xl font-bold"> Make walking </span>
          </div>
          <p className="lg:text-6xl md:text-4xl sm:text-2xl font-bold">your daily habit that</p>
          <p className="lg:text-6xl md:text-4xl sm:text-2xl font-bold">rewards.</p>
        </div>
        <p className="leading-7 md:text-xs lg:text-xl font-light sm:w-[98%] md:w-[90%] lg:w-[60%] text-left border-l border-gray-800 px-6 ">
          Sed ut perspiciatis unde omnis iste natus error sit — voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.
        </p>
        <div>
          <AppButton />
        </div>
        <div className="flex mt-12 md:hidden sm:hidden">
          <i>
            <CgArrowLongDown size={32} />
          </i>
          <p className="text-xs ">
            EXPLORE <br /> MORE
          </p>
        </div>
      </div>
      <div className="w-[40%] md:w-[80%] sm:w-[90%]">
        <img className="lg:h-55 lg:w-55 md:w-100" src={mock} alt="" />
      </div>
    </section>
  );
};

export default Hero;
