import React from "react";
import image from "assets/cyber-bg.png";
import {
  CloudUploadIcon,
  DatabaseIcon,
  ServerIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/solid";

const Hero = () => {
  return (
    <main
      name="home"
      className="w-full h-screen flex flex-col justify-between bg-zinc-200 "
    >
      <div className="grid md:grid-cols-2 container m-auto">
        <div className="flex flex-col w-full px-2 py-8 justify-center md:items-start">
          <p className="md:text-3xl text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-4xl  md:text-6xl  font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is Our Tech Brand</p>
          <button className="py-3 px-6  sm:w-[60%]  my-4">Get Started</button>
        </div>
        <div className="w-full">
          <img src={image} className="object-contain w-full" alt="life" />
        </div>
      </div>
      <section className="absolute flex flex-col py-4 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
        <p className="text-2xl p-1">Data Service</p>
        <div className="flex justify-between flex-wrap px-4">
          <p className="flex px-4 py-2 text-slate-500">
            <CloudUploadIcon className="h-6 text-indigo-600" />
            App Security
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <PaperAirplaneIcon className="h-6 text-indigo-600" />
            API
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <DatabaseIcon className="h-6 text-indigo-600" />
            Dashboard Design
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <ServerIcon className="h-6 text-indigo-600" />
            Cloud Data
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
