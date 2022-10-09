import React from "react";
import star from "../../assets/star.svg";
import btc from "../../assets/btc.png";
import eth from "../../assets/eth.png";
import goo from "../../assets/goo.png";

const Header = () => {
  return (
    <section className="lg:px-[6rem] px-[1.5rem] z-0">
      <div className="mt-[6rem] flex justify-center items-center flex-col lg:mt-[8rem] lg:gap-8 md:gap-2 ">
        <div>
          <div className="flex gap-8 items-start">
            <img className="w-24" src={star} alt="" />
            <span className="lg:text-6xl md:text-4xl text-3xl font-bold"> PushFit: </span>
          </div>
          <p className="mt-2 lg:text-6xl md:text-4xl text-2xl font-bold">Litepaper Version 1.0</p>
        </div>
        <p className= "leading-7 md:text-xs lg:text-xl font-light mt-4  md:w-[90%] lg:w-[60%] text-left border-l border-gray-800 px-6 ">
          Pushfit is bridging physical health with the digital reward system in which users can stay fit and healthy by running and at the same time they can earn a reward in form of our digital token.
        </p>
      </div>

      <div className="flex mt-[6rem] lg:flex-row  flex-col lg:mt-[10rem]">
        <div className="flex flex-col gap-[2rem]">
          <h1 className="text-2xl lg:text-6xl font-bold">Run & Earn Together  </h1>
          <h2 className="lg:text-4xl text-2xl font-[600]">
            How We
            <span className="text-[#A5FF00]"> Profit?</span>
          </h2>
          <p className="lg:w-[65%] text-[#6D6D6D] text-x lg:text-xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sed iaculis id mi. Malesuada sit et velit arcu, est, eu eget. Imperdiet mollis ultricies elementum feugiat potenti nunc ultrices. Consectetur pellentesque quisque amet risus
            aliquam. Tortor, pharetra nisl malesuada adipiscing mauris mattis. Facilisis tincidunt amet mi enim.
          </p>
        </div>
        <div className="relative flex w-[100%] gap-[8rem]">
          <div className="absolute">
            <img src={goo} alt="" />
          </div>
          <div>
            <img src={btc} alt="" />
          </div>
          <div>
            <img src={eth} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
