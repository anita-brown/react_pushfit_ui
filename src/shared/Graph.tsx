import React from 'react'
import Linee from "../assets/Linee.png"

const Graph = () => {
  return (
    <div className="static overflow-x-auto ">
      <div className="mt-[12rem] text-x">
        <div className="lg:w-[18%] absolute lg:left-[71%] lg:mt-[-4rem] left-[66%] mt-[-10rem] center-0">
          <div className="mb-3">
            <h3 className="font-bold text-[12px]">Q4 2021</h3>
            <h1 className="font-bold text-[12px] lg:text-[15px]">To the Moon!</h1>
          </div>
          <p className="w-[99%] text-[11px] lg:text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
      </div>
      <div className=" lg:w-[38%] md:absolute mt-[-7rem] left-[27%] lg:left-[27.5%] lg:mt-[3rem] md:mt-[-8rem] md:left-[31%] absolute center-0 ">
        <div className="mb-3">
          <h3 className="font-bold text-[12px]">Q2 2021</h3>
          <h1 className="font-bold text-[12px] lg:text-[15px]">The Initial Push</h1>
        </div>
        <p className="w-[53%] text-[11px] lg:text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      <img className="w-[100%]" src={Linee} alt="" />
      <div className=" lg:w-[42%] sm:left-[18%] md:left-[13%] lg:left-[9%] lg:mt-[-5rem] absolute center-0 left-[8%]">
        <div className="mb-3">
          <h3 className="font-bold text-[12px]">Q1 2021</h3>
          <h1 className="font-bold text-[12px] lg:text-[15px]">Protocol Initialized</h1>
        </div>
        <p className="w-[48%] text-[11px] lg:text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      <div className="lg:w-[28%] absolute center-0 lg:left-[54%] lg:mt-[-6rem] left-[55%]">
        <div className="mb-3">
          <h3 className="font-bold text-[12px]">Q3 2021</h3>
          <h1 className="font-bold text-[12px] lg:text-[15px]">Holding the Line</h1>
        </div>
        <p className="w-[88%] text-[11px] lg:text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
    </div>
  );
}

export default Graph
