import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import support from "assets/support.jpg";
import { Crumb } from "Utilities";
const Support = () => {
  return (
    <section name="support" className="w-full  mt-24">
      <div className="w-full  h-[700px] bg-gray-900/90 absolute">
        <img
          src={support}
          alt="support"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8  text-3xl text-center uppercase text-slate-300">
            Support
          </h2>
          <h3 className="text-3xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            excepturi culpa laboriosam
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16  relative px-4 pt-12 sm:pt-20 text-black">
          <Crumb
            icon={
              <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
            }
            head="Sales"
            subText="Contact Us"
            secondIcon={<ArrowSmRightIcon className="w-5 ml-2" />}
          />
          <Crumb
            icon={
              <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
            }
            head="Technical Support"
            subText="Contact Us"
            secondIcon={<ArrowSmRightIcon className="w-5 ml-2" />}
          />
          <Crumb
            icon={
              <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
            }
            head="Media Inquiries"
            subText="Contact Us"
            secondIcon={<ArrowSmRightIcon className="w-5 ml-2" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Support;
