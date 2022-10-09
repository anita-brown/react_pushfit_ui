import React from "react";
import { contents } from "../../data";
import Card from "../card/Card";

const BannerFour = (props: any) => {
  return (
    <section>
      <div className="flex flex-col lg:items-center  md:mt-[19rem] mt-[15rem] gap-4">
        <h1 className="font-bold text-2xl lg:text-4xl">Push Fit Superheroes</h1>
        <p className="text-gray-500 lg:w-[50%] lg:text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.</p>
      </div>
      <div className="mt-20 grid lg:grid-cols-4 grid-cols-2 items-center md:grid md:grid-cols-3 gap-8">
        {contents.map((content) => (
          <Card content={content} />
        ))}
      </div>
    </section>
  );
};

export default BannerFour;
