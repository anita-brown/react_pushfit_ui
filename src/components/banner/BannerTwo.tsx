import React from "react";
import phone from "../../assets/phone.svg";

const BannerTwo = () => {
  return (
    <section className="flex mt-28 gap-24">
      <div>
        <img className="w-[800px]" src={phone} alt="" />
      </div>
      <div className="flex flex-col justify-evenly">
        <div className="">
          <h1 className="font-bold text-4xl leading-[50px] w-[65%] mb-6">You can earn by doing your daily sports & exercises</h1>
          <p className="w-[68%] text-xl text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa ed ut perspiciatis unde omnis iste natus.. <br /> <br /> Antium, totam rem aperiam, eaque ptatem accusantium
            doloremque laud antium, totam rem aperiam, eaque ipsa.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 border px-7 py-3 rounded-full text-xl uppercase font-bold bg-[#A5FF00]">Whitepaper</button>
          <button className="flex items-center gap-2 border px-7 py-3 rounded-full text-xl uppercase font-bold bg-[#A5FF00]">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
