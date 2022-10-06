import React from "react";
import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";
import mintshoe from "../../assets/mintshoe.svg";
import arrowdown from "../../assets/arrowdown.png";
import bottom from "../../assets/bottom.png"
import mint from "../../assets/mint.png";
const MarketChart = () => {
  return (
    <section className="mt-[4rem]">
      <h1 className="text-center  font-[600] text-4xl">IN-APP MARKETPLACE</h1>

      <div className="flex items-center mb-[1rem] gap-[32rem] justify-center">
        <img className="w-[25%] mt-[-1rem]" src={leftarrow} alt="" />
        <img className=" w-[25%] mt-[-1rem]" src={rightarrow} alt="" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold">BUY</p>
          <img className="w-20" src={mintshoe} alt="" />
          <img className="w-5" src={arrowdown} alt="" />

          <p className="font-bold">MOVE TO EARN</p>
          <img className="w-20" src={mint} alt="" />
        </div>
        <div className="mb-[10rem] font-[500] text-5xl">
          <p>Tokenomics</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold">RENT</p>
          <p>
            <span className="font-bold">30%</span> to renter
          </p>
          <p>
            <span className="font-bold">70% </span> to owner
          </p>
          <img className="w-5" src={arrowdown} alt="" />
          <p className="font-bold">MOVE TO EARN</p>
          <img className="w-20" src={mint} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img className="w-[92%]" src={bottom} alt="" />
      <img className="w-5" src={arrowdown} alt="" />
      </div>
    </section>
  );
};

export default MarketChart;
