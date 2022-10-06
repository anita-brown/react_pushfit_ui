import React from "react";
import {data} from "../../data"

const BannerCard = () => {
  return (
    <section className="mt-[6rem] text-center">
      <h1 className="font-bold text-6xl">Why Us?</h1>
      <div className="flex mt-[3rem] gap-6">
        {data.map((item) => (
          <div className="flex flex-col py-8 items-center gap-4 border-4 border-[#A5FF00] rounded-lg">
            <h1 className="font-bold text-2xl">{item.header}</h1>
            <p className="w-[75%] text-[#6D6D6D] text-[17px]">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-[3rem] text-[#6D6D6D] text-[17px]">
        <span className="font-bold"> PushFit Mission:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
      </p>
    </section>
  );
};

export default BannerCard;
