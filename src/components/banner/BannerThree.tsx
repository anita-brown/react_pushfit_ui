import React from "react";
import Graph from "../../shared/Graph";

const BannerThree = () => {

  return (
    <section>
      <div className="flex flex-col lg:items-center justify-center mt-20 gap-4">
        <h1 className="font-bold text-2xl lg:text-4xl ">Push Fits Future Plans</h1>
        <p className="text-gray-500 lg:w-[50%] lg:text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud antium, totam rem aperiam, eaque ipsa ed ut.</p>
      </div>
      <Graph/>
     
    </section>
  );
};

export default BannerThree;
