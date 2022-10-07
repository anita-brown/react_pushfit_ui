import React from 'react'
import Linee from "../assets/Linee.png"

const Graph = () => {
  return (
    <div className="static">
      <div className="mt-28 flex text-x justify-between">
        <p></p>
        <div className="w-[330px] sm:w-[90px] md:w-[180px]">
          <div className="mb-3">
            <h3 className="font-bold text-xs sm:text-[12px]">Q4 2021</h3>
            <h1 className="font-bold sm:text-[12px]">To the Moon!</h1>
          </div>
          <p className="sm:w-[98%] sm:text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
      </div>
      <div className="w-[330px] sm:w-[90px] md:w-[180px] md:absolute sm:mt-[-10rem] sm:left-[33%] md:mt-[-8rem] md:left-[31%] absolute center-0 left-[27%]">
        <div className="mb-3">
          <h3 className="font-bold text-xs sm:text-[12px]">Q2 2021</h3>
          <h1 className="font-bold sm:text-[12px]">The Initial Push</h1>
        </div>
        <p className="sm:w-[98%] sm:text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      <img className="w-[100%] sm:w-[100%]" src={Linee} alt="" />
      <div className="w-[330px] sm:w-[90px] md:w-[180px] sm:left-[18%] md:left-[13%] absolute center-0 left-[8%]">
        <div className="mb-3">
          <h3 className="font-bold text-xs sm:text-[12px]">Q1 2021</h3>
          <h1 className="font-bold sm:text-[12px]">Protocol Initialized</h1>
        </div>
        <p className="sm:w-[98%] sm:text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      <div className="w-[330px] sm:w-[90px] md:w-[180px] absolute center-0 left-[55%]">
        <div className="mb-3">
          <h3 className="font-bold text-xs sm:text-[12px]">Q3 2021</h3>
          <h1 className="font-bold sm:text-[12px]">Holding the Line</h1>
        </div>
        <p className="sm:w-[98%] sm:text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
    </div>
  );
}

export default Graph
