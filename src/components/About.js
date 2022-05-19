import React from "react";
import { Card } from "Utilities";

const About = () => {
  return (
    <section className="max-w-[1240px] md:py-32 px-4 py-8 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Trusted by Developers across the World
        </h2>
        <p className="text-2xl md:text-3xl py-6  text-justify text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quo
          dolorem dolorum voluptatibus suscipit quis fugit, inventore nisi
          eveniet consequuntur.
        </p>
      </div>
      <div className="p-4 md:p-8 flex flex-wrap gap-[20px]">
        <Card title="100%" subtitle="Completion" />
        <Card title="24/7" subtitle="Delivery" />
        <Card title="100k" subtitle="Transactions" />
      </div>
    </section>
  );
};

export default About;
