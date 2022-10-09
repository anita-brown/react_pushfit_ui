import React from "react";
import leftarrow from "../../assets/leftarrow.svg";
import rightarrow from "../../assets/rightarrow.svg";
import mintshoe from "../../assets/mintshoe.svg";
import arrowdown from "../../assets/arrowdown.png";
import bottom from "../../assets/bottom.png"
import mint from "../../assets/mint.png";
import btc from "../../assets/btc.png"
import forwardarrow from "../../assets/forwardarrow.svg";
import backarrow from "../../assets/backarrow.svg";


const MarketChart = () => {
  return (
    <section className="lg:mt-[4rem] mt-[3rem]">
      <h1 className="text-center text-2xl font-[600] lg:text-4xl">IN-APP MARKETPLACE</h1>

      <div className="flex items-center mb-[1rem] gap-[4rem] lg:gap-[32rem] justify-center">
        <img className="w-[25%] mt-[2rem] lg:mt-[-1rem]" src={leftarrow} alt="" />
        <img className=" w-[25%] mt-[2rem] lg:mt-[-1rem]" src={rightarrow} alt="" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="font-bold text-[13px]">BUY</p>
          <img className="w-20" src={mintshoe} alt="" />
          <img className="w-5" src={arrowdown} alt="" />

          <p className="font-bold text-[12px]">MOVE TO EARN</p>
          <img className="w-20" src={mint} alt="" />
        </div>
        <div className="mb-[10rem] font-[500] text-2xl lg:text-5xl">
          <p>Tokenomics</p>
        </div>
        <div className="flex flex-col gap-2 items-center text-[13px]">
          <p className="font-bold">RENT</p>
          <p>
            <span className="font-bold">30%</span> to renter
          </p>
          <p>
            <span className="font-bold">70% </span> to owner
          </p>
          <img className="w-5" src={arrowdown} alt="" />
          <p className="font-bold text-[12px]">MOVE TO EARN</p>
          <img className="w-20" src={mint} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img className="w-[92%]" src={bottom} alt="" />
        <img className="w-5" src={arrowdown} alt="" />
        <p className="font-bold mt-4 text-[13px]">MOVE TO EARN</p>
        <div className="flex items-center justify-center">
          <img className="w-20" src={mint} alt="" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <img className="w-[9rem]" src={forwardarrow} alt="" />
            <img className="w-[9rem]" src={backarrow} alt="" />
          </div>
          <img className="w-28" src={btc} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MarketChart;
