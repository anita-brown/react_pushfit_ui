import React from 'react'
import Linee from "../assets/Linee.png"

const Graph = () => {
  return (
    <div className="static overflow-x-auto ">
      <div className="mt-[12rem] text-x">
        <div className="md:w-[180px] absolute left-[66%] mt-[-10rem] center-0">
          <div className="mb-3">
            <h3 className="font-bold text-[12px]">Q4 2021</h3>
            <h1 className="font-bold text-[12px]">To the Moon!</h1>
          </div>
          <p className="w-[99%] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
      </div>
      <div className=" md:w-[180px] md:absolute mt-[-7rem] left-[27%] md:mt-[-8rem] md:left-[31%] absolute center-0 ">
        <div className="mb-3">
          <h3 className="font-bold text-[12px]">Q2 2021</h3>
          <h1 className="font-bold text-[12px]">The Initial Push</h1>
        </div>
        <p className="w-[53%] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      <img className="w-[100%]" src={Linee} alt="" />
      <div className=" md:w-[180px] sm:left-[18%] md:left-[13%] absolute center-0 left-[8%]">
        <div className="mb-3">
          <h3 className="font-bold text-[12px]">Q1 2021</h3>
          <h1 className="font-bold text-[12px]">Protocol Initialized</h1>
        </div>
        <p className="w-[48%] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      <div className="md:w-[180px] absolute center-0 left-[55%]">
        <div className="mb-3">
          <h3 className="font-bold text-[12px]">Q3 2021</h3>
          <h1 className="font-bold text-[12px]">Holding the Line</h1>
        </div>
        <p className="w-[88%] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
    </div>
  );
}

export default Graph
