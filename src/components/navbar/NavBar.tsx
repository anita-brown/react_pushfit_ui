import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { RiShareBoxFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 mx-auto lg:px-[6rem] px-[1.5rem]">
      <Link to="/home">
        <img className="w-20 h-20" src={logo} alt="" />
      </Link>
      <ul className="hidden md:flex lg:text-[1rem] md:text-xs">
        <Link to="/home">
          <li className="p-4 font-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:border-b-4 hover:text-gray-900 transition duration-[.2s] ease-in-out">How to earn</li>
        </Link>
        <Link to="/litepaper">
          <li className="p-4 font-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:border-b-4 hover:text-gray-900 transition duration-[.2s] ease-in-out">Litepaper</li>
        </Link>
        <Link to="/roadmap">
          <li className="p-4 font-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:border-b-4 hover:text-gray-900 transition duration-[.2s] ease-in-out">Roadmap</li>
        </Link>
        <Link to="/about">
          <li className="p-4 font-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:border-b-4 hover:text-gray-900 transition duration-[.2s] ease-in-out">About Push Fit</li>
        </Link>
      </ul>
      <div className="hidden md:flex lg:text-[1rem] md:text-xs items-center gap-2 p-4 font-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:border-b-4 hover:text-gray-900 transition duration-[.2s] ease-in-out">
        <p>Connect Phantom</p>
        <i>
          <RiShareBoxFill />
        </i>
      </div>
      <div onClick={handleNav} className="block md:hidden ">
        {!nav ? <RiCloseLine size={25} /> : <RiMenu3Fill size={20} />}
      </div>
      <div className={!nav ? "lg:hidden md:hidden lg:px-14 fixed left-0 top-0 w-[80%] bg-white h-full ease-in-out duration-500 z-20" : " sm:fixed fixed z-20 left-[-100%]"}>
        <img className="w-20 h-20 m-4" src={logo} alt="" />

        <ul className="pt-24">
          <Link to="/home">
            <li onClick={() => setNav(!nav)} className="p-4 border-b border-gray-100 ">
              How to earn
            </li>
          </Link>
          <Link to="/litepaper">
            <li onClick={() => setNav(!nav)} className="p-4 border-b border-gray-100">
              Litepaper
            </li>
          </Link>
          <Link to="/roadmap">
            <li onClick={() => setNav(!nav)} className="p-4 border-b border-gray-100">
              Roadmap
            </li>
          </Link>
          <Link to="/about">
            <li onClick={() => setNav(!nav)} className="p-4 border-b border-gray-100">
              About Push Fit
            </li>
          </Link>
        </ul>
        <div onClick={() => setNav(!nav)} className="flex items-center gap-2 p-4">
          <p>Connect Phantom</p>
          <i className="hidden">
            <RiShareBoxFill />
          </i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
