import React from 'react'
import logo from "../../assets/logo.svg";
import { RiShareBoxFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
const Footer = () => {
  return (
    <section className='mt-24'>
          <div className="flex justify-between items-center h-24 mx-auto">
              <img className="w-20 h-20" src={logo} alt="" />
              <ul className="hidden md:flex lg:text-[1rem] md:text-xs">
                  <li className="p-4 hover:border-b-4 hover:font-bold">How to earn</li>
                  <li className="p-4 hover:border-b-4 hover:font-bold">Litepaper</li>
                  <li className="p-4 hover:border-b-4 hover:font-bold">Roadmap</li>
                  <li className="p-4 hover:border-b-4 hover:font-bold">About Push Fit</li>
              </ul>
              <div className="hidden md:flex lg:text-[1rem] md:text-xs items-center gap-2 hover:border-b-4 p-4 hover:font-bold">
                  <p>Connect Phantom</p>
                  <i>
                      <RiShareBoxFill />
                  </i>
              </div>
              </div>
          <div className='mt-6 mb-6 flex justify-between'>
              <p>Push Fit @ 2022. All Right Reserved.</p>
              <p>Privacy Policy     |     Terms & Conditions</p>

          </div>
    </section>
  )
}

export default Footer
