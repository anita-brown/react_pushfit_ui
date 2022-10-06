import React from "react";
import Card, { data } from "../card/Card";

const BannerFour = (props: any) => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mt-[15rem] gap-4">
        <h1 className="font-bold text-4xl">Push Fit Superheores</h1>
        <p className="text-center w-[45%] text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa.</p>
      </div>
      <div className="mt-20 grid grid-cols-4 gap-8">
        {data.map((content) => (
          <Card content={content} />
        ))}
      </div>
    </section>
  );
};

export default BannerFour;
