import React from "react";
import phone from "../../assets/phone.svg";

const BannerTwo = () => {
  return (
    <section className="flex sm:flex-col sm:items-center md:flex-col md:items-center mt-28 gap-24">
      <div>
        <img className="w-[800px] md:w-[500px] sm:w-[380px]" src={phone} alt="" />
      </div>
      <div className="flex flex-col md:gap-8 md:items-center md:justify-center sm:items-center justify-evenly">
        <div className="md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center">
          <h1 className="font-bold text-4xl sm:text-2xl sm:w-[95%] sm:text-center leading-[50px] md:w-[90%] w-[65%] mb-6">You can earn by doing your daily sports & exercises</h1>
          <p className="w-[68%] md:w-[90%] sm:text-[16px] sm:text-center text-xl text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa ed ut perspiciatis unde omnis iste natus.. <br /> <br /> Antium, totam rem aperiam, eaque ptatem accusantium
            doloremque laud antium, totam rem aperiam, eaque ipsa.
          </p>
        </div>
        <div className="flex gap-4 sm:mt-8">
          <button className="flex items-center gap-2 border px-7 py-3 rounded-full sm:text-x text-xl uppercase font-bold bg-[#A5FF00]">Whitepaper</button>
          <button className="flex items-center gap-2 border px-7 py-3 rounded-full sm:text-x  text-xl uppercase font-bold bg-[#A5FF00]">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
