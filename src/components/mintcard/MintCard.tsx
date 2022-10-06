import React from 'react'
import mintcard from "../../assets/mintshoe.svg"
import {MdDoubleArrow} from "react-icons/md"

const MintCard = () => {
  return (
    <section className="flex justify-center text-center mt-24">
      <div className=" text-white bg-black border-4 border-[#A5FF00] rounded-2xl w-[16%]">
        <div className="flex items-center justify-center gap-2 py-1  border-b-2 border-[#A5FF00] ">
          <i className="text-[#A5FF00]">
            <MdDoubleArrow />
          </i>
          <p>Sneakers</p>
        </div>
        <div className="flex flex-col py-6 gap-2 items-center ">
          <img className="w-[45%]" src={mintcard} alt="" />
          <p className="text-[#A5FF00] text-xs">#123456789</p>
          <p className="text-xs">Mint 1 | Level 2</p>
        </div>
        <div className="flex items-center justify-center gap-4 p-4 border-4 border-[#A5FF00] rounded-xl text-xs">
          <p>5000 PUSH</p>
          <button className="bg-[#A5FF00] text-black rounded-lg px-5 py-1">Buy</button>
        </div>
      </div>
    </section>
  );
}

export default MintCard
