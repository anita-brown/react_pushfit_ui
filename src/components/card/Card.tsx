import React from "react";

const Card = ({ content }:any) => {
  return (
    <div className="">
      <div className="mb-4 bg-[#F5FFE7] px-[3rem] py-[3rem] flex justify-center">
        <img className="lg:w-[70%] " src={content.image} alt="image" />
      </div>
      <div className=" flex flex-col gap-1">
        <p className="font-[550] text-[13px]">{content.title}</p>
        <h1 className="font-bold text-xl lg:text-2xl">{content.name}</h1>
        <p className="text-[11px] text-[#6D6D6D] text-left">{content.content}</p>
      </div>
    </div>
  );
};

export default Card;
