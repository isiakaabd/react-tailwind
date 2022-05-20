import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, subtitle }) => {
  return (
    <main
      aria-label="card"
      className="flex-1 border py-8 rounded-xl shadow-xl text-center"
    >
      <p className="text-6xl font-bold text-indigo-600">{title}</p>
      <p className="text-gray-400 mt-2 ">{subtitle}</p>
    </main>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Card;
