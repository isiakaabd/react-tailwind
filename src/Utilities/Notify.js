import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const Notify = () => {
  return (
    <main className="flex md:px-0 px-4">
      <div>
        <CheckIcon className="w-7 mr-4 text-green-600" />
      </div>
      <div>
        <h3 className="font-bold text-lg">Notifications</h3>
        <p className="text-lg pt-2 pb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A similique
          suscipit .
        </p>
      </div>
    </main>
  );
};

export default Notify;
