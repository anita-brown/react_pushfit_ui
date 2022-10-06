import React from "react";

export const data = [
  {
    image: require("../../assets/pic0.png"),
    title: "CEO & Founder",
    name: "Hydra Push",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    image: require("../../assets/pic1.png"),
    title: "Manager & HR",
    name: "Amna Rizwan",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    image: require("../../assets/pic2.png"),
    title: "Snr. Product Designer",
    name: "Sajid Ali",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    image: require("../../assets/pic3.png"),
    title: "Product Designer",
    name: "Majid Ali",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    image: require("../../assets/pic4.png"),
    title: "Snr. Software Engineer",
    name: "Abid Ali",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    image: require("../../assets/pic5.png"),
    title: "Social Media Manager",
    name: "Amniah Mumtaz",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    image: require("../../assets/pic6.png"),
    title: "Frontend Developer",
    name: "Raffy Ahmed",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
];

const Card = ({ content }:any) => {
  return (
    <div className="">
      <div className=" w-[70%] mb-4 bg-[#F5FFE7] px-[4rem] py-[3rem] flex justify-center">
        <img className="w-35 " src={content.image} alt="image" />
      </div>
      <div className=" flex flex-col gap-1">
        <p className="font-[550] text-[13px]">{content.title}</p>
        <h1 className="font-bold text-2xl">{content.name}</h1>
        <p className="text-[14px] w-[95%] text-[#6D6D6D]text-left">{content.content}</p>
      </div>
    </div>
  );
};

export default Card;
