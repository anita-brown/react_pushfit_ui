import React from "react";
import star from "../../assets/star.svg";
import btc from "../../assets/btc.png";
import eth from "../../assets/eth.png";
import goo from "../../assets/goo.png";

const Header = () => {
  return (
    <section>
      <div className="mt-[8rem] flex justify-center items-center flex-col lg:gap-8 md:gap-2">
        <div>
          <div className="flex gap-8 items-start">
            <img className="w-24" src={star} alt="" />
            <span className="lg:text-6xl md:text-4xl font-bold"> PushFit: </span>
          </div>
          <p className="mt-2 lg:text-6xl md:text-4xl font-bold">Litepaper Version 1.0</p>
        </div>
        <p className="md:text-xs lg:text-xl font-light md:w-[90%] lg:w-[45%] text-left border-l-2 border-gray-400 px-6 ">
          Pushfit is bridging physical health with the digital reward system in which users can stay fit and healthy by running and at the same time they can earn a reward in form of our digital token.
        </p>
      </div>

      <div className="flex mt-[10rem]">
        <div className="flex flex-col gap-[2rem]">
          <h1 className="text-6xl font-bold">Run & Earn Together </h1>
          <h2 className="text-4xl font-[600]">
            How We
            <span className="text-[#A5FF00]"> Profit?</span>
          </h2>
          <p className="w-[65%] text-[#6D6D6D] text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sed iaculis id mi. Malesuada sit et velit arcu, est, eu eget. Imperdiet mollis ultricies elementum feugiat potenti nunc ultrices. Consectetur pellentesque quisque amet risus
            aliquam. Tortor, pharetra nisl malesuada adipiscing mauris mattis. Facilisis tincidunt amet mi enim.
          </p>
        </div>
        <div className="relative flex w-[100%] gap-[8rem]">
          <div className="absolute">
            <img className="" src={goo} alt="" />
          </div>
          <div>
            <img className="" src={btc} alt="" />
          </div>
          <div>
            <img className="" src={eth} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
