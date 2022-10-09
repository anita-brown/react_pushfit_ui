import React from 'react'
import logo from "../../assets/logo.svg";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className='mt-24 px-[1.5rem]'>
          <div className="lg:flex items-center justify-between">
              <div className='flex justify-between'>

              <Link to="/home">
              <img className="w-20 h-20" src={logo} alt="" />
              </Link>
              <div className=" flex md:flex lg:hidden md:text-xs items-center gap-2 hover:border-b-4 p-4 hover:font-bold text-[14px]">
                  <p>Connect Phantom</p>
                  <i>
                      <RiShareBoxFill />
                  </i>
              </div>
              </div>
              <ul className="flex justify-between text-[14px] md:flex lg:text-[1rem] lg:gap-4 md:text-xs">
                  <Link to="/home">
                      <li className=" font-semi-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:font-bold hover:border-b-4 hover:text-gray-900 transition duration-[.2s] ease-in-out">How to earn</li>
                  </Link>
                  <Link to="/litepaper">
                      <li className="font-semi-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:border-b-4 hover:text-gray-900 hover:font-bold  transition duration-[.2s] ease-in-out">Litepaper</li>
                  </Link>
                  <Link to="/roadmap">
                      <li className="font-semi-bold hover:font-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:border-b-4 hover:text-gray-900 transition duration-[.2s] ease-in-out">Roadmap</li>
                  </Link>
                  <Link to="/about">
                      <li className="font-semi-bold hover:font-bold text-gray-500 border-b-4 border-transparent hover:border-slate-300 hover:border-b-4 hover:text-gray-900 transition duration-[.2s] ease-in-out">About Push Fit</li>
                  </Link>
              </ul>
              <div className="hidden md:hidden lg:flex md:text-xs items-center gap-2 hover:border-b-4 p-4 hover:font-bold lg:text-[14px]">
                  <p>Connect Phantom</p>
                  <i>
                      <RiShareBoxFill />
                  </i>
              </div>
              </div>
          <div className='mt-6 mb-6 flex justify-between'>
              <p className='text-[10px]'>Push Fit@2022. All Right Reserved.</p>
              <p className='text-[10px]'>Privacy Policy     |     Terms & Conditions</p>

          </div>
    </section>
  )
}

export default Footer
