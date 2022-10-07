import React from "react";
import { contents } from "../../data";
import Card from "../card/Card";

const BannerFour = (props: any) => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center md:mt-[19rem] mt-[15rem] gap-4">
        <h1 className="font-bold sm:text-2xl text-4xl">Push Fit Superheores</h1>
        <p className="text-center w-[45%] sm:w-[70%] text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.</p>
      </div>
      <div className="mt-20 grid grid-cols-4 md:grid md:grid-cols-2 sm:grid-cols-2 gap-8">
        {contents.map((content) => (
          <Card content={content} />
        ))}
      </div>
    </section>
  );
};

export default BannerFour;
