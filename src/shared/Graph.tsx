import React from 'react'
import Linee from "../assets/Linee.png"

const Graph = () => {
  return (
    <div className="static">
      <div className="mt-28 flex text-x justify-between">
        <p></p>
        <div className="w-[330px]">
          <div className="mb-3">
            <h3 className="font-bold text-xs">Q4 2021</h3>
            <h1 className="font-bold">To the Moon!</h1>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
      </div>
      <div className="w-[330px] absolute center-0 left-[27%]">
        <div className="mb-3">
          <h3 className="font-bold text-xs">Q2 2021</h3>
          <h1 className="font-bold">The Initial Push</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      <img className="w-[100%]" src={Linee} alt="" />
      <div className="w-[330px] absolute center-0 left-[8%]">
        <div className="mb-3">
          <h3 className="font-bold text-xs">Q1 2021</h3>
          <h1 className="font-bold">Protocol Initialized</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
      <div className="w-[330px] absolute center-0 left-[55%]">
        <div className="mb-3">
          <h3 className="font-bold text-xs">Q3 2021</h3>
          <h1 className="font-bold">Holding the Line</h1>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      </div>
    </div>
  );
}

export default Graph
