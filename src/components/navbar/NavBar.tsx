import React, {useState} from "react";
import logo from "../../assets/logo.svg";
import { RiShareBoxFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="flex justify-between items-center h-24 mx-auto">
      <img className="w-20 h-20" src={logo} alt="" />
      <ul className="hidden md:flex lg:text-[1rem] md:text-xs">
        <Link to="/home">

        <li className="p-4 hover:border-b-4 hover:font-bold">How to earn</li>
        </Link>
        <Link to="/litepaper">
          <li className="p-4 hover:border-b-4 hover:font-bold">Litepaper</li>
        </Link>
        <li className="p-4 hover:border-b-4 hover:font-bold">Roadmap</li>
        <li className="p-4 hover:border-b-4 hover:font-bold">About Push Fit</li>
      </ul>
      <div className="hidden md:flex lg:text-[1rem] md:text-xs items-center gap-2 hover:border-b-4 p-4 hover:font-bold">
        <p>Connect Phantom</p>
        <i>
          <RiShareBoxFill />
        </i>
      </div>
      <div onClick={handleNav} className="block md:hidden md:mr-9">
        {!nav ? <RiCloseLine size={25} /> : <RiMenu3Fill size={20} />}
      </div>
      <div className={!nav ? "lg:hidden md:hidden px-14 fixed left-0 top-0 w-[75%] bg-white h-full ease-in-out duration-500" : "fixed left-[-100%]"}>
        <img className="w-20 h-20 m-4" src={logo} alt="" />

        <ul className="pt-24">
          <li className="p-4 border-b border-gray-100">How to earn</li>
          <li className="p-4 border-b border-gray-100">Litepaper</li>
          <li className="p-4 border-b border-gray-100">Roadmap</li>
          <li className="p-4 border-b border-gray-100">About Push Fit</li>
        </ul>
        <div className="flex items-center gap-2 p-4">
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
