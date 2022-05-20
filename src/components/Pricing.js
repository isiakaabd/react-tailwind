import React from "react";
import { Standard } from "Utilities";
const Pricing = () => {
  return (
    <section name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="container mx-auto py-12 md:px-0 px-4">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="md:text-5xl text-4xl font-bold text-white py-8">
            The right price for your research
          </h3>
          <p className="text-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
            similique suscipit
          </p>
        </div>
        <div className="md:w-1/2 grid mx-auto  md:grid-cols-2">
          <Standard price="$40" name="STANDARD" />
          <Standard price="$99" name="PREMIUM" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
