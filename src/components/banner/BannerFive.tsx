import React from 'react';
import screen from "../../assets/screen.svg"
import shoe from "../../assets/bigshoe.svg"

const BannerFive = () => {
  return (
    <section>
      <div className="flex flex-col mt-[4rem] gap-4">
        <h1 className="font-bold text-2xl lg:text-4xl">Push Fit Screenshots</h1>
        <p className="text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.</p>
      </div>
      <div className="mt-[3rem] flex justify-center">
        <img className='' src={screen} alt="" />
      </div>

      <div className="flex justify-center mt-[10rem] relative">
        <img className="w-[45rem] sm:w-[35rem]" src={shoe} alt="" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%]">
          <div className="uppercase flex flex-col justify-center items-center gap-4">
            <h1 className=" font-[600] text-center text-[15px] w-full text-[#BBBBBB] py-4 bg-white border ">Email Address</h1>
            <button className="flex items-center gap-2 border px-7 py-3 rounded-full text-[14px] uppercase font-bold bg-[#A5FF00] border-none">Subscribe!</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerFive
