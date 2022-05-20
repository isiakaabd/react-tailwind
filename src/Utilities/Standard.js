import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Standard = ({ name, price }) => {
  return (
    <div className="bg-white rounded-xl  relative shadow-2xl text-slate-900  m-4 p-4 md:p-8 ">
      <span className="px-3 py-1 uppercase rounded-2xl text-sm bg-indigo-200 text-indigo-900">
        {name}
      </span>
      <p className="text-6xl  font-bold py-4 flex">
        {price} <sub className="text-xl text-slate-500 flex flex-col">/mo</sub>
      </p>
      <p className="text-xl py-8 text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A similique
        suscipit
      </p>
      <div className="text-sm relative">
        <p className="flex items-center  py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor
          mr-5
        </p>
        <p className="flex items-center py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor
          mr-5
        </p>
        <p className="flex  items-center py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor
          mr-5
        </p>
        <p className="flex items-center py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor
          mr-5
        </p>
        <p className="flex items-center py-4">
          <CheckIcon className="w-8 mr-5 text-green-600" /> Lorem ipsum, dolor
          mr-5
        </p>
        <button className="w-full py-4 my-4">Get Started</button>
      </div>
    </div>
  );
};

export default Standard;
