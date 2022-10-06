import React from "react";
import star from "../../assets/star.svg";
import phoneImage from "../../assets/phoneImage.svg"

const Header = () => {
  return (
    <section className="px-[6rem]">
      <div className="mt-[8rem] flex justify-center items-center flex-col lg:gap-8 md:gap-2">
        <div>
          <div className="flex gap-8 items-start">
            <img className="w-24" src={star} alt="" />
            <span className="lg:text-6xl md:text-4xl font-bold"> Who are we?</span>
          </div>
        </div>
        <p className="md:text-xs lg:text-xl font-light md:w-[90%] lg:w-[45%] text-left border-l-2 border-gray-400 px-6 ">
          Pushfit is bridging physical health with the digital reward system in which users can stay fit and healthy by running and at the same time they can earn a reward in form of our digital token.
        </p>
      </div>

      <div className="flex mt-[3rem] items-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold lg:text-6xl md:text-4xl ">The Goal</h1>
          <p className="md:text-xs lg:text-xl font-light md:w-[90%] lg:w-[65%] text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sed iaculis id mi. Malesuada sit et velit arcu, est, eu eget. Imperdiet mollis ultricies elementum feugiat potenti nunc ultrices. Consectetur pellentesque quisque amet risus
            aliquam. Tortor, pharetra nisl malesuada adipiscing mauris mattis. Facilisis tincidunt amet mi enim.
          </p>
        </div>
        <div>
          <img className="w-[70rem]" src={phoneImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
