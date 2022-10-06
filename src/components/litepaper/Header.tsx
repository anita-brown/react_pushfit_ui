import React from 'react'
import star from "../../assets/star.svg"

const Header = () => {
  return (
    <section className="mt-[8rem] flex justify-center items-center flex-col lg:gap-8 md:gap-2">
      <div className=" ">
        <div className="flex gap-8 items-start">
          <img className="w-24" src={star} alt="" />
          <span className="lg:text-6xl md:text-4xl font-bold"> PushFit: </span>
        </div>
        <p className="mt-2 lg:text-6xl md:text-4xl font-bold">Litepaper Version 1.0</p>
      </div>
      <p className="md:text-xs lg:text-xl font-light md:w-[90%] lg:w-[45%] text-left border-l-2 border-gray-400 px-6 ">
        Pushfit is bridging physical health with the digital reward system in which users can stay fit and healthy by running and at the same time they can earn a reward in form of our digital token.
      </p>
    </section>
  );
}

export default Header
