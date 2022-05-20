import React from "react";
import { Card } from "Utilities";

const About = () => {
  return (
    <section name="about" className="container md:py-32 px-4 py-8 mx-auto">
      <div className=" px-2 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Trusted by Developers across the World
        </h2>
        <p className="text-2xl md:text-3xl py-6  text-justify text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quo
          dolorem dolorum voluptatibus suscipit quis fugit, inventore nisi
          eveniet consequuntur.
        </p>
      </div>
      <div className="px-2  text-center grid md:grid-cols-3 gap-2 md:gap-y-0 gap-y-6">
        <Card title="100%" subtitle="Completion" />
        <Card title="24/7" subtitle="Delivery" />
        <Card title="100k" subtitle="Transactions" />
      </div>
    </section>
  );
};

export default About;
