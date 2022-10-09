import React from 'react'
import AppButton from '../../shared/AppButton'
import icon from "../../assets/icon.png"
import shoe from "../../assets/shoe.png"
import nft from "../../assets/nft.png"
import staking from "../../assets/staking.png"

const BannerOne = () => {
    return (
      <section className="flex flex-col gap-16">
        <div className="flex lg:flex-row lg:justify-between lg:gap-8 flex-col items-center lg:flex-row md:items-center justify-between pt-20">
          <div className="flex flex-col gap-2">
            <h1 className="leading-[3rem] lg:leading-[3.6rem] font-bold text-2xl lg:text-4xl w-full">
              Walking, Running, Cycling,
              <br /> Driving & Earn Cryptocurrency
            </h1>
            <p className="text-gray-500 lg:w-[65%]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.</p>
          </div>
          <div className="lg:w-[30%]">
            <AppButton />
          </div>
        </div>
        <div className="flex grid-cols-2 items-center grid md:grid md:grid-cols-2 lg:flex gap-8">
          <div>
            <img className="w-14" src={icon} alt="" />
            <h1 className="font-bold mt-6 mb-4 text-xl">Drive to Earn</h1>
            <p className="text-gray-500 text-[13px]">Lorem ipsum dolor sit amet, consels ctetur adipiscing elit, sed dolar o eiusmod tempor incidihu sa.</p>
          </div>
          <div>
            <img className="w-14" src={shoe} alt="" />
            <h1 className="font-bold mt-6 mb-4  text-xl">Move to Earn</h1>
            <p className="text-gray-500 text-[13px]">Lorem ipsum dolor sit amet, consels ctetur adipiscing elit, sed dolar o eiusmod tempor incidihu sa.</p>
          </div>
          <div>
            <img className="w-14" src={nft} alt="" />
            <h1 className="font-bold mt-6 mb-4  text-xl">NFT</h1>
            <p className="text-gray-500 text-[13px]">Lorem ipsum dolor sit amet, consels ctetur adipiscing elit, sed dolar o eiusmod tempor incidihu sa.</p>
          </div>
          <div>
            <img className="w-14" src={staking} alt="" />
            <h1 className="font-bold mt-6 mb-4  text-xl">Staking</h1>
            <p className="text-gray-500 text-[13px]">Lorem ipsum dolor sit amet, consels ctetur adipiscing elit, sed dolar o eiusmod tempor incidihu sa.</p>
          </div>
        </div>
      </section>
    );
}

export default BannerOne
