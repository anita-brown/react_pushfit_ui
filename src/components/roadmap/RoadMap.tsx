import React from "react";
import Graph from "../../shared/Graph";
import avatar from "../../assets/avatar.svg";
import ellipse from "../../assets/ellipse.svg";
import { SiTelegram, SiDiscord } from "react-icons/si";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaTiktok } from "react-icons/fa";

const data = [<SiTelegram />, <AiFillTwitterCircle />, <SiDiscord />, <AiFillInstagram />, <FaLinkedinIn />, <FaFacebookF />, <FaTiktok />];

const RoadMap = () => {
  return (
    <section className="mt-[8rem] mb-[10rem] flex flex-col items-center justify-center lg:px-[6rem] px-[1.5rem] z-0">
      <h1 className="font-bold lg:text-6xl text-2xl">Roadmap</h1>
      <Graph />

      <div className="mt-[19rem] flex flex-col lg:flex-row justify-between ">
        <div className="mt-[-4rem] mb-8 relative">
          <img className="w-[100%]" src={avatar} alt="" />
          <img className="w-[95%] absolute bottom-[-10%]" src={ellipse} alt="" />
        </div>

        <div className="flex flex-col gap-6 mt-18">
          <h1 className="font-bold text-2xl lg:text-[3rem]">Join Our Community</h1>
          <p className="font-[500] text-x lg:text-[22px]">
            Connect with <span className="text-[#15DD4D]">Pushfit</span> community to get updates about the newest thing about the our activities and our business.
          </p>
          <div className="grid grid-cols-4 gap-6 mt-4">
            {data.map((item) => (
              <i className="bg-[#A5FF00] rounded-full lg:text-6xl p-[1.5rem] lg:p-[2.2rem]">{item}</i>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
