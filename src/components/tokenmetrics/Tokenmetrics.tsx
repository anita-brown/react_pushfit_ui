import React from "react";
import chart from "../../assets/chart.svg";
import { FaFile } from "react-icons/fa";
import RoadMap from "../roadmap/RoadMap";

const Tokenmetrics = () => {
  return (
    <>
      <section className="mt-[8rem] flex flex-col lg:flex-row items-center lg:px-[6rem] px-[1.5rem] z-0">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold lg:text-6xl text-2xl">Tokenmetrics</h1>
          <p className="lg:text-[20px] lg:w-[76%] text-[#6D6D6D]">
            Push Token dolor sit amet, consectetur adipiscing elit. Commodo sed iaculis id mi. Malesuada sit et velit arcu, est, eu eget. Imperdiet mollis ultricies elementum feugiat potenti nunc ultrices. Consectetur pellentesque quisque amet risus
            aliquam. Tortor, pharetra nisl malesuada adipiscing mauris mattis. Facilisis tincidunt amet mi enim.
          </p>
          <p className="font-bold lg:text-2xl">
            Token issue: <span className="text-[#A5FF00]">500.000.000</span> PUSH Token
          </p>
          <p className="font-bold lg:text-xl">Contract address</p>
          <div className="lg:w-[80%] h-[3.6rem] border-2 border-[#A5FF00] rounded-lg flex px-4 items-center">
            <input className="py-[0.5rem] outline-0  w-[100%]" type="text" placeholder="0xb69fd4566hh67h6555y778i955w456gy67543w" />
            <i className="text-2xl">
              <FaFile />
            </i>
          </div>
        </div>
        <div className="mt-[3rem]">
          <img className="w-[160rem]" src={chart} alt="" />
        </div>
      </section>
      <div>
        <RoadMap />
      </div>
    </>
  );
};

export default Tokenmetrics;
