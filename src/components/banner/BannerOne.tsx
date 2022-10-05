import React from 'react'
import AppButton from '../../shared/AppButton'
import icon from "../../assets/icon.png"
import shoe from "../../assets/shoe.png"
import nft from "../../assets/nft.png"
import staking from "../../assets/staking.png"

const BannerOne = () => {
    return (
      <section className="flex flex-col gap-16">
        <div className="flex justify-between items-center pt-20">
          <div className="flex flex-col gap-2">
            <h1 className="leading-[3rem] font-bold text-4xl w-[35rem]">
              Walking, Running, Cycling,
              <br /> Driving & Earn Cryptocurrency
            </h1>
            <p className="w-[35rem] text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.</p>
          </div>
          <div>
            <AppButton />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="">
            <img className="w-14" src={icon} alt="" />
            <h1 className="font-bold mt-6 mb-4 text-xl">Drive to Earn</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consels ctetur adipiscing elit, sed dolar o eiusmod tempor incidihu sa.</p>
          </div>
          <div>
            <img className="w-14" src={shoe} alt="" />
            <h1 className="font-bold mt-6 mb-4  text-xl">Move to Earn</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consels ctetur adipiscing elit, sed dolar o eiusmod tempor incidihu sa.</p>
          </div>
          <div>
            <img className="w-14" src={nft} alt="" />
            <h1 className="font-bold mt-6 mb-4  text-xl">NFT</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consels ctetur adipiscing elit, sed dolar o eiusmod tempor incidihu sa.</p>
          </div>
          <div>
            <img className="w-14" src={staking} alt="" />
            <h1 className="font-bold mt-6 mb-4  text-xl">Staking</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consels ctetur adipiscing elit, sed dolar o eiusmod tempor incidihu sa.</p>
          </div>
        </div>
      </section>
    );
}

export default BannerOne
