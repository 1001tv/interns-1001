import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick || (() => {})} // Default to a no-op function if onClick is not provided
      className="w-full bg-Green text-NavyN900 font-semibold py-3 rounded-xl hover:bg-opacity-90 transition"
    >
      {title}
    </button>
  );
};

export default Button;
