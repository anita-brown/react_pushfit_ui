import React from "react";
import star from "../../assets/star.svg";
import mock from "../../assets/mock.svg";
import { CgArrowLongDown } from "react-icons/cg";
import AppButton from "../../shared/AppButton";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center lg:flex-row md:justify-center w-[100%] pt-16">
      <div className="">
        <div className="flex flex-col lg:gap-4 md:gap-2">
          <div className="flex gap-8 items-start">
            <img className="w-24" src={star} alt="" />
            <span className="lg:text-6xl md:text-4xl text-3xl font-bold"> Make walking </span>
          </div>
          <p className="lg:text-6xl md:text-4xl text-3xl font-bold">your daily habit that</p>
          <p className="lg:text-6xl md:text-4xl text-3xl font-bold mt-4">rewards.</p>
        </div>
        <p className="leading-7 md:text-xs lg:text-xl font-light mt-4  md:w-[90%] lg:w-[60%] text-left border-l border-gray-800 px-6 ">
          Sed ut perspiciatis unde omnis iste natus error sit — voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.
        </p>
        <div>
          <AppButton />
        </div>
        <div className="lg:flex mt-12 lg:block md:hidden hidden">
          <i>
            <CgArrowLongDown size={32} />
          </i>
          <p className="text-xs ">
            EXPLORE <br /> MORE
          </p>
        </div>
      </div>
      <div className="w-[95%] md:w-[80%] mt-8">
        <img className="lg:h-55 lg:w-55 md:w-100" src={mock} alt="" />
      </div>
    </section>
  );
};

export default Hero;
