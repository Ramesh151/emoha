import React, { useState } from "react";

const Card2 = ({ ima, heading }) => {
  const [color, setColor] = useState("bg-slate-100");

  function bgchanger() {
    const newColor = color === "bg-slate-100" ? "bg-red-500" : "bg-slate-100";
    setColor(newColor);
  }
  return (
    <div
      className={`rounded-md shadow-md overflow-hidden lg:p-14 inline-block mx-2 min-h-24 px-auto mt-3 lg:min-h-56 mb-20 ${color}`}
      onClick={bgchanger}
    >
      <div className="flex flex-col justify-center items-center px-4">
        <img src={ima} className="w-12" alt="Card Image" />
        <h1 className="lg:text-lg font-bold leading-tight text-gray-900 text-center">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default Card2;
