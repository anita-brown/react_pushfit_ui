import React from "react";

const Card = ({ content }:any) => {
  return (
    <div className="">
      <div className=" w-[70%] mb-4 bg-[#F5FFE7] px-[4rem] py-[3rem] flex justify-center">
        <img className="w-35 " src={content.image} alt="image" />
      </div>
      <div className=" flex flex-col gap-1">
        <p className="font-[550] text-[13px]">{content.title}</p>
        <h1 className="font-bold sm:text-xl text-2xl">{content.name}</h1>
        <p className="text-[14px] w-[95%] sm:w-[100%] text-[#6D6D6D]text-left">{content.content}</p>
      </div>
    </div>
  );
};

export default Card;
