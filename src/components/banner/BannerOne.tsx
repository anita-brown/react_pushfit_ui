import React from 'react'
import AppButton from '../../shared/AppButton'

const BannerOne = () => {
  return (
    <section className="flex justify-between items-center pt-20">
      <div className="flex flex-col gap-2">
        <h1 className="leading-[3.5rem] font-bold text-4xl w-[35rem]">Walking, Running, Cycling,<br /> Driving & Earn Cryptocurrency</h1>
        <p className="w-[35rem] text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.</p>
      </div>
      <div>
        <AppButton />
      </div>
    </section>
  );
}

export default BannerOne
