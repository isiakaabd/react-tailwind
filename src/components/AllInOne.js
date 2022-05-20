import React from "react";
import { Notify } from "Utilities";

const AllInOne = () => {
  return (
    <section name="platform" className="w-full my-32">
      <div className="container mx-auto md:px-2 px-4">
        <h2 className="text-5xl font-bold text-center">All In One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A similique
          suscipit excepturi beatae temporibus error sunt saepe? Impedit, dicta
          reiciendis.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          {Array.from({ length: 8 }, (_, i) => (
            //https://stackoverflow.com/questions/49677220/reactjs-array-fill-with-key-in-jsx-element
            <Notify key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
