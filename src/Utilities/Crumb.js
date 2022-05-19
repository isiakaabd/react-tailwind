import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

const Crumb = ({ icon, head, subText, secondIcon }) => {
  //   console.log(icon);
  return (
    <main className="bg-white rounded-xl shadow-2xl">
      <div className="p-8">
        {icon}
        <h3 className="font-bold text-2xl my-6">{head}</h3>
        <p className="text-gray-600 text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A similique
          suscipit excepturi beatae temporibus error sunt saepe? Impedit, dicta
          reiciendis.
        </p>
      </div>
      <div className="bg-slate-100 pl-8 py-4">
        <p className="flex items-center text-indigo-600">
          {subText} {secondIcon}
        </p>
      </div>
    </main>
  );
};

export default Crumb;
