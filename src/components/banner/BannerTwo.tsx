import React from "react";
import phone from "../../assets/phone.svg";

const BannerTwo = () => {
  return (
    <section className="flex flex-col items-center gap-4 md:flex-col md:items-center mt-28 lg:flex-row lg:gap-24">
      <div>
        <img className="lg:w-[800px] md:w-[500px] w-[95%]" src={phone} alt="" />
      </div>
      <div className="flex flex-col md:gap-8 justify-evenly">
        <div className="md:flex md:flex-col  sm:flex sm:flex-col ">
          <h1 className="font-bold text-2xl lg:text-4xl  leading-[40px] md:w-[90%] mb-6">You can earn by doing your daily sports & exercises</h1>
          <p className="md:w-[90%] text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa ed ut perspiciatis unde omnis iste natus.. <br /> <br /> Antium, totam rem aperiam, eaque ptatem accusantium
            doloremque laud antium, totam rem aperiam, eaque ipsa.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 border px-6 py-3 rounded-full text-[14px] lg:text-xl uppercase font-bold bg-[#A5FF00]">Whitepaper</button>
          <button className="flex items-center gap-2 border px-7 py-3 rounded-full text-[14px]  lg:text-xl uppercase font-bold bg-[#A5FF00]">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
