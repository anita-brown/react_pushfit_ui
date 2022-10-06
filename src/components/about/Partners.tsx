import React from "react";
import { partners } from "../../assets/data";
import { featured } from "../../assets/data";
import BannerFour from "../banner/BannerFour";

const Partners = () => {
  return (
    <section>
      <div className=" mt-[4rem] text-center">
        <h1 className="font-bold lg:text-6xl">Our Partners</h1>
        <div className=" mt-[3rem] w-[100%] bg-black flex items-center gap-6 justify-center py-6">
          {partners.map((partner) => (
            <img className="w-28" src={partner} alt="" />
          ))}
        </div>
      </div>
      <div className="px-[6rem]">
        <BannerFour />
      </div>
      <div className=" mt-[8rem] mb-[18rem] text-center">
        <h1 className="font-bold lg:text-6xl">Featured</h1>
        <div className=" mt-[2.4rem] w-[100%] bg-black flex items-center gap-6 justify-center py-6">
          {featured.map((feature) => (
            <img className="w-28" src={feature} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
